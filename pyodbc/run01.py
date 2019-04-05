
import sys
import pandas as pd
import numpy as np
import json
import math

odbc_conn_str = 'DSN=SQLServer;UID=sa;PWD=manager'
price_csv_file = 'price.csv'
price_json_file = 'price.json'
price_js_file = 'price.js'
wprice_csv_file = 'pricew.csv'
wprice_json_file = 'pricew.json'
gname_json_file = 'gname.json'
gname_js_file = 'gname.js'
data_js_file = '../gdf/gdf_data.js'
data_json_file = '../gdf/gdf_data.json'

data_sql_file = '../gdf/gdf_data.sql'


sql_select0 = """
with
OPVIEW(OYear, oid, pid, psid, Price, PackSize, UnitPrice, quantity) as (
	SELECT 
		YEAR(oe.OrderPlaced) as OYEAR
		,op.oid
		,op.[PID]
		,op.PSID
		,pp.Price
		,p.PVK
		, CAST(pp.Price as float) / CAST(p.PVK as float) as 'UnitPrice'
		,Quantity
	FROM 
		tbl_OrderProducts op, tbl_OrderEvents oe, tbl_Products p, tbl_ProductPrices pp, tbl_Orders o
	WHERE 
		op.Active=1 AND op.oid = o.oid AND o.Active=1 AND 
		pp.PSID = op.PSID AND pp.PID = p.PID AND op.PID = p.PID AND p.OLID in (3, 5) AND p.Kits = 0 AND 
		op.OID = oe.OID AND Year(oe.OrderPlaced) > 2010
),
OPVIEW2(OYear, pid, psid, TotalQuantityPerPricePerYear) as (
	SELECT
		Oyear, pid, psid, cast(sum(quantity) as float) as 'TotalQuantityPerPricePerYear'
	from OPVIEW
	group by oyear, pid, psid
),
OPVIEW3(OYear, pid, TotalQuantityPerYear) as (
	SELECT
		Oyear, pid, cast(sum(TotalQuantityPerPricePerYear) as float) as 'TotalQuantityPerYear'
	from OPVIEW2
	group by oyear, pid
)
, OPVIEW4 ( OYear, oid, pid, psid, quantity, TotalQuantityPerPricePerYear, TotalQuantityPerYear, PercentPerYear, UnitPrice, WeightedPrice) as (
	SELECT
		o2.OYear, o1.oid, o2.pid, o2.psid, o1.quantity, TotalQuantityPerPricePerYear, o3.TotalQuantityPerYear, 
		CAST(TotalQuantityPerPricePerYear as float) / cast(o3.TotalQuantityPerYear as float) as 'PercentPerYear',
		o1.UnitPrice,
		(CAST(TotalQuantityPerPricePerYear as float) / cast(o3.TotalQuantityPerYear as float)) * o1.UnitPrice as 'WeightedPrice'
	FROM OPVIEW o1, OPVIEW2 o2, OPVIEW3 o3
	WHERE o1.oyear = o2.oyear and o2.OYear = o3.oYear and o1.pid = o2.pid and o2.pid = o3.pid and o1.psid = o2.psid
)
, opview5 ( oyear, pid, weightedprice ) as (
	select distinct oyear, pid, weightedprice from opview4
)
select OYear, CAST(PID as int) as PID, sum(weightedprice) as WeightedAverage from opview5 group by oyear, pid order by 1, 2

"""


sql_select = """
WITH 

PRD_SUP_DATE_ACTION(PSID, PID, Code, Generic, INNCode, Concentration, Description, Active, SID, Supplier, Price, PackSize, UnitPrice, MarketShare, 
StaircasePricingID, Staircase, BidRefID, BidRef, ExpiryDate, LID, LDATE, LAction, LComment) AS 
( 
SELECT 
	VPP.PSID, VPP.PID, VP.Code, 
	( CASE WHEN PATINDEX('%-(%', Code) > 2 THEN (
			CASE WHEN SUBSTRING(Code, 0, 4) = 'PAS' THEN (
				SUBSTRING(Code, 0, len(Code) - patindex('%(-%', reverse(Code)) )
			) WHEN SUBSTRING(Code, 3, 3) = 'FDC' THEN (
				SUBSTRING(Code, 7, len(Code) - patindex('%(-%', reverse(Code)) - 7)
			) WHEN SUBSTRING(Code, 0, 4) = 'MDR' THEN (
				CASE WHEN PATINDEX('%-B6-100%', Code) > 2 THEN (
					'Pyr(B6)-100'
				) WHEN PATINDEX('%-B6-50%', Code) > 2 THEN (
					'Pyr(B6)-50'
				) ELSE (
					SUBSTRING(Code, 5, len(code) - patindex('%(-%', reverse(code)) - 5 )
				) END 
			) WHEN PATINDEX('%Pyri-5-%', Code) > 2 THEN (
				'Pyr(B6)-5'
			) WHEN PATINDEX('%Pyri-50-%', Code) > 2 THEN (
				'Pyr(B6)-50'
			) WHEN PATINDEX('%Pyri-100-%', Code) > 2 THEN (
				'Pyr(B6)-100'
			) WHEN PATINDEX('%&#43;%', Code) > 2 THEN ( 
				LEFT(REPLACE(REPLACE(Code, '&#43;', '/'), 'mi', 'mp'), PATINDEX('%-(%', REPLACE(REPLACE(Code, '&#43;', '/'), 'mi', 'mp')) - 1)
			) ELSE (
				LEFT(Code, PATINDEX('%-(%', Code) - 1)
			) END
		) ELSE (
			Code
		)
	END ) AS 'Generic',
	CASE WHEN PATINDEX('%&#43;%', INNCode) > 2 THEN ( 
			REPLACE(INNCode, '&#43;', '/')
		) ELSE (
			INNCode
		) END INNCode,
	CASE WHEN PATINDEX('%&#43;%', Concentration) > 2 THEN ( 
			REPLACE(Concentration, '&#43;', '/')
		) ELSE (
			Concentration
		) END INNCode,
	VP.Description,
	VP.Active,
	VS.SID, VS.Name, VPP.Price, 
	VP.PVK AS 'PackSize',
	( CASE 
		WHEN VP.PVK = 0 THEN VPP.Price
		ELSE VPP.Price / VP.PVK
		END
	) AS 'UnitPrice',
	VPP.MarketShare, VPP.SPID, VSP.Staircase, VBR.BRID, VBR.BidRef, VBR.ExpriryDate, VAL.LID, VAL.LDate, VAL.LAction, VAL.LComment 

FROM 
	tbl_ProductPrices AS VPP
	INNER JOIN tbl_Products AS VP ON VP.PID = VPP.PID
	INNER JOIN tbl_Suppliers AS VS ON VPP.SID = VS.SID
	INNER JOIN tbl_StaircasePricing AS VSP ON VPP.SPID = VSP.SPID 
	INNER JOIN tbl_BidRefs AS VBR ON VPP.BRID = VBR.BRID
	INNER JOIN tbl_AuditLog AS VAL ON VAL.EID=VPP.PSID AND VAL.ETID=19
WHERE 
	VP.OLID in (3, 5) AND VP.Kits = 0 AND VP.Active=1 AND PATINDEX('%BTL%', VP.Code) = 0
),

PRD_ACTION(PID, Code, LDate, LAction, LComment) AS
( -- PRODUCT ACTION
	SELECT VP.PID, VP.Code, VAL.LDate, VAL.LAction, VAL.LComment
	FROM 
		tbl_Products AS VP
		INNER JOIN tbl_AuditLog AS VAL ON VAL.EID=VP.PID AND VAL.ETID=3 -- and VAL.LAction in ('Canceled', 'Created')
),

PRD_SUP_DATE_ACTION2(PSID, PID, Code, Generic, INNCode, Concentration, Description, Active, SID, Supplier, Price, PackSize, UnitPrice, MarketShare, 
StaircasePricingID, Staircase, BidRefID, BidRef, ExpiryDate, LID, LDATE, LAction, LComment, STARTDATE, ENDDATE) AS 
( -- PRICE ACTION
	SELECT 
		PSID, PID, Code, Generic, INNCode, Concentration, Description,
		Active, SID, Supplier, Price, PackSize, UnitPrice, MarketShare, 
		StaircasePricingID, Staircase, BidRefID, BidRef, ExpiryDate, LID, LDATE, LAction, LComment, 
		( CASE WHEN (LAction = 'Canceled') OR (LAction = 'Change of display' and LComment = '0') THEN 
			( 
				ISNULL(
					(SELECT MAX(LDATE) FROM PRD_SUP_DATE_ACTION AS PSDA1 
						WHERE 
							PSDA.PID=PSDA1.PID AND PSDA.SID=PSDA1.SID AND PSDA.PRICE=PSDA1.Price AND PSDA1.LDATE <= PSDA.LDate AND 
							(PSDA1.LAction = 'Created' OR (PSDA1.LAction = 'Change of display' and PSDA1.LComment = '1'))
					),
					(SELECT MIN(LDATE) FROM PRD_ACTION AS PA WHERE PA.PID = PSDA.PID  AND PA.LAction = 'Created' AND PA.LDATE <= PSDA.LDate )
				)
			)
			ELSE 
				LDate
			END
		) AS 'STARTDATE', 
		( CASE WHEN (LAction = 'Created') OR (LAction = 'Change of display' AND LComment = '1') THEN 
			(
				ISNULL(
					(SELECT MIN(LDATE) 
						FROM PRD_SUP_DATE_ACTION AS PSDA2 
						WHERE 
							PSDA.PID=PSDA2.PID AND PSDA.SID=PSDA2.SID AND PSDA.PRICE=PSDA2.Price AND PSDA2.LDATE >= PSDA.LDate AND
							(PSDA2.LAction = 'Canceled' OR (PSDA2.LAction = 'Change of display' AND PSDA2.LComment = '0' ))
					),
					(SELECT MAX(LDATE) FROM PRD_ACTION AS PA WHERE PA.PID = PSDA.PID AND PA.LDate >= PSDA.LDate AND PA.LAction = 'Canceled')
				)
			)
			ELSE 
				LDate
			END
		) AS 'ENDDATE'

	FROM PRD_SUP_DATE_ACTION AS PSDA
)

SELECT distinct PID, Code, Generic, INNCode, Concentration, Description, SID, UnitPrice, MarketShare

, (CASE WHEN BidRef like '%2011%' THEN ( 1 ) WHEN year(ExpiryDate) = 2012 THEN (1 ) ELSE ( 0 ) END ) AS Y2011
, (CASE WHEN BidRef like '%2012%' THEN ( 1 ) WHEN year(ExpiryDate) = 2013 THEN (1 ) ELSE ( 0 ) END ) AS Y2012
, (CASE WHEN BidRef like '%2013%' THEN ( 1 ) WHEN year(ExpiryDate) = 2014 THEN (1 ) ELSE ( 0 ) END ) AS Y2013
, (CASE WHEN BidRef like '%2014%' THEN ( 1 ) WHEN year(ExpiryDate) = 2015 THEN (1 ) ELSE ( 0 ) END ) AS Y2014
, (CASE WHEN BidRef like '%2015%' THEN ( 1 ) WHEN year(ExpiryDate) = 2016 THEN (1 ) ELSE ( 0 ) END ) AS Y2015
, (CASE WHEN BidRef like '%2016%' THEN ( 1 ) WHEN year(ExpiryDate) = 2017 THEN (1 ) ELSE ( 0 ) END ) AS Y2016
, (CASE WHEN BidRef like '%2017%' THEN ( 1 ) WHEN year(ExpiryDate) = 2018 THEN (1 ) ELSE ( 0 ) END ) AS Y2017
, (CASE WHEN BidRef like '%2018%' THEN ( 1 ) WHEN year(ExpiryDate) = 2019 THEN (1 ) ELSE ( 0 ) END ) AS Y2018
, (CASE WHEN BidRef like '%2019%' THEN ( 1 ) WHEN year(ExpiryDate) = 2020 THEN (1 ) ELSE ( 0 ) END ) AS Y2019

FROM PRD_SUP_DATE_ACTION2 AS PSDA
WHERE BidRefID <> 1
order by 3, 1
"""
csvheader = ['Code', 'Generic', 'SID', 'UnitPrice','MarketShare','Y2011','Y2012','Y2013','Y2014','Y2015','Y2016','Y2017','Y2018','Y2019', 'PID', 'INNCode', 'Description', 'Concentration']

csvheader0 = ['OYear','PID', 'WeightedAverage']

def table_to_csv(odbc_conn, sql_select_stmt, file_path):
	try:
		df = pd.read_sql(sql_select_stmt, odbc_conn)
		df.to_csv(file_path, encoding='utf-8', header=True, doublequote=True, sep=',', index=False)
		return True
	except Exception as e:
		print("Error: {}".format(str(e)))
		sys.exit(1)
		
	
def conn_and_save():
	try:
		import pyodbc
		conn = pyodbc.connect(odbc_conn_str)
		cursor = conn.cursor()
		table_to_csv(conn, sql_select, price_csv_file)
		table_to_csv(conn, sql_select0, wprice_csv_file)
		conn.close()
	except Exception as e:
		sys.exit(1)

#conn_and_save()

dfw = pd.read_csv(wprice_csv_file)
dfw[csvheader0[0]].astype('int')
dfw[csvheader0[1]].astype('int')
#print(dfw)

df = pd.read_csv(price_csv_file)
df[csvheader[2]].astype('int')
df[csvheader[14]].astype('int')

gnames = []

years1 = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
yyears1 = ['Y2011', 'Y2012', 'Y2013', 'Y2014', 'Y2015', 'Y2016', 'Y2017', 'Y2018', 'Y2019']

mod = ['min', 'max', 'avg', 'wgt']

# build genericname and sid
gnames = df[csvheader[1]].unique()
#print(gnames)
gnames = np.sort(gnames)
#print(gnames)

price = []
prod = []
gid = 1
for gname in gnames:
	gdata = df[df.Generic == gname]
	
	pids1 = gdata[csvheader[14]].unique()
	pids = pids1.astype(int).tolist()
	#pnames = gdata[csvheader[0]].unique().tolist()
	pinfo = gdata[gdata[csvheader[14]].isin(pids1)]
	pnames = pinfo[csvheader[0]].tolist()
	pinncodes = pinfo[csvheader[15]].tolist()
	pconcentrations = pinfo[csvheader[17]].tolist()
	pdescriptions = pinfo[csvheader[16]].tolist()

	prod1 = {}
	prod1['id'] = gid
	prod1['name'] = gname
	prod1['inn'] = pinncodes[0]
	prod2 = []
	prod2count = 0
	for ind, pid in enumerate(pids):
		prod3 = {}
		prod3['pid'] = pid
		prod3['pcode'] = pnames[ind]
		prod3['inn'] = pinncodes[ind]
		prod3['desc'] = pdescriptions[ind].replace('\n', ' ').replace('\r', '')
		prod3['concentration'] = pconcentrations[ind]
		prod2.append(prod3)
		prod2count += 1
	prod1['prod'] = prod2
	prod1['count'] = prod2count
	prod.append(prod1)

	gdataw = dfw[dfw[csvheader0[1]].isin(pids)]
	#print(gdataw)
	
	price1 = {}
	price1['id'] = gid
	price1['name'] = gname
	price1['inn'] = pinncodes[0]
	price1['concentration'] = pconcentrations[0]
	
	price2 = []
	price2count = 0
	for ind, yyear in enumerate(yyears1):
		gy = gdata[gdata[yyear] == 1]
		
		#print(years1[ind])
		gyw = gdataw[gdataw[csvheader0[0]] == int(years1[ind])]
		#print(gyw)
		
		if gy.empty == False:
			min = gy[csvheader[3]].min(axis=0)
			max = gy[csvheader[3]].max(axis=0)
			mid = gy[csvheader[3]].mean()
			#print(gyw[csvheader0[2]])
			wgh = gyw[csvheader0[2]].mean()
			if math.isnan(wgh):
				wgh = mid
			elif wgh < min:
				wgh = min
			elif wgh > max:
				wgh = max
			#price1[years1[ind]] = { mod[0]:min, mod[1]:max, mod[2]:mid, mod[3]:wgh }
			price3 = {}
			price3['year'] = years1[ind]
			price3[mod[0]] = min
			price3[mod[1]] = max
			price3[mod[2]] = mid
			price3[mod[3]] = wgh
			price2.append(price3)
			price2count += 1

	price1['prices'] = price2
	price1['count'] = price2count
	price.append(price1)

	gid += 1

with open(data_sql_file, 'wt') as fp:
	
	STMT_INSERT = "INSERT INTO "
	STMT_VALUES = " VALUES ( \""
	STMT_COMMA = "\" , \""
	# create medicine table
	fp.write("DROP TABLE IF EXISTS MED;\n")
	fp.write("CREATE TABLE MED (ID INTEGER PRIMARY KEY, NAME VARCHAR(128), INN VARCHAR(128));\n")
	
	# create product table
	fp.write("DROP TABLE IF EXISTS PROD;\n")
	fp.write("CREATE TABLE PROD (PID INTEGER PRIMARY KEY, MED_ID INTEGER REFERENCES MED(ID), PCODE VARCHAR(128), INN VARCHAR(128), CONCENTRATION VARCHAR(128), DESCRIPTION VARCHAR(256));\n")

	for ind, prod1 in enumerate(prod):
		fp.write(STMT_INSERT + " MED (ID, NAME, INN) " + STMT_VALUES + str(prod1['id']) + STMT_COMMA + prod1['name'].strip() + STMT_COMMA + prod1['inn'].strip() + "\" ); \n")
		for ind2, prod2 in enumerate(prod1['prod']):
			fp.write(STMT_INSERT + " PROD " + STMT_VALUES + str(prod2['pid']) + STMT_COMMA + str(prod1['id']) + STMT_COMMA + prod2['pcode'].strip() + STMT_COMMA + prod2['inn'].strip() + STMT_COMMA + prod2['concentration'].strip() + STMT_COMMA + prod2['desc'].strip() + "\" ); \n")
			
	# create price table
	fp.write("DROP TABLE IF EXISTS PRICE;\n")
	fp.write("CREATE TABLE PRICE (ID SERIAL PRIMARY KEY, MED_ID INTEGER REFERENCES MED(ID), YEAR INT, PMIN DOUBLE PRECISION, PMAX DOUBLE PRECISION, PAVG DOUBLE PRECISION, PWGT DOUBLE PRECISION );\n")			
	for ind, price1 in enumerate(price):
		for ind2, price2 in enumerate(price1['prices']):
			fp.write(STMT_INSERT + " PRICE (MED_ID, YEAR, PMIN, PMAX, PAVG, PWGT) " + STMT_VALUES +  
				str(price1['id']) + STMT_COMMA + str(price2['year']) + STMT_COMMA + str(price2['min']) + STMT_COMMA + str(price2['max']) + STMT_COMMA + str(price2['avg']) + STMT_COMMA + str(price2['wgt']) + "\" );\n")

	
"""
with open(data_js_file, 'wt') as fp:
	fp.write("var genericnames = ")
	json.dump(prod, fp)
	fp.write(";\n")
	fp.write("var gdfprices = ")
	json.dump(price, fp)
	fp.write(";\n")

with open(data_json_file, 'wt') as fp:
	fp.write("{\"genericnames\":")
	fp.write(json.dumps(prod, indent=4, sort_keys=True))
	fp.write(", \"gdfprices\":")
	fp.write(json.dumps(price, indent=5, sort_keys=True))
	fp.write("}")
"""
