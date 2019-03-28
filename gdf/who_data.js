var whoguidances = [
{"id":"1", "tbtype":"DSTB", "name":"WHO Guidelines Drug-Susceptible TB 2010", 
	"yearPublished":"2010"},
{"id":"2", "tbtype":"DSTB", "name":"WHO Guidelines Drug-Susceptible TB 2017", 
	"yearPublished":"2017"},
{"id":"3", "tbtype":"DRTB", "name":"WHO Guidelines on Drug-Resistant TB 2014", 
	"yearPublished":"2014"},
{"id":"4", "tbtype":"DRTB", "name":"WHO Guidelines on Drug-Resistant TB 2016", 
	"yearPublished":"2016"},
{"id":"5", "tbtype":"DRTB", "name":"WHO Rapid Communication on Drug-Resistant TB 2018", 
	"yearPublished":"2018"},
{"id":"6", "tbtype":"LTBI", "name":"WHO Guidelines Latent TB Infection 2018", 
	"yearPublished":"2018"},
{"id":"7", "tbtype":"DRTB", "name":"WHO Rapid Communication on Drug-Resistant TB 2018 and Expert Opinion",
	"yearPublished":"2018"},
{"id":"8", "tbtype":"DRTB", "name":"WHO consolidated guidelines on Drug-Resistant TB treatment",
	"yearPublished":"2019"}
];

var regimens = [
{"id":"1", "guidid":"2", "name":"Adult Drug-Susceptible TB", 
	"weightband":"55-70", 
	"composition":"2 RHZE(150/75/400/275) / 4 RH(150/75)"},
{"id":"2", "guidid":"2", "name":"Pediatric Drug-Susceptible TB", 
	"weightband":"12-15 kg", 
	"composition":"2 RHZ(75/50/150)/ 4 RH(75/50)"},
{"id":"3", "guidid":"2", 
	"name":"Pediatric Drug-Susceptible TB (include ethambutol)", 
	"weightband":"12-15 kg", 
	"composition":"2 RHZ(75/50/150) E(100) / 4 RH(75/50) E(100)"},
	
{"id":"4", "guidid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Km Eto, MDR-TB Conventional", 
	"weightband":"46-55 kg",
	"composition":"8 Km Lfx Eto Cs Z / 12 Lfx Eto Cs Z"},
	
	{"id":"", "guidid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Mfx Km Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Km Mfx Eto Cs Z / 12 Mfx Eto Cs Z"},
	
	{"id":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Lfx Km Pto", 
	"weightband":"46-55 kg",
	"composition":"8 Km Lfx Pto Cs Z / 12 Lfx Pto Cs Z"},
	
	{"id":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Mfx Cm Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Mfx Eto Cs Z / 12 Mfx Eto Cs Z"},
	
	{"id":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Mfx Cm Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Mfx Eto Cs Z / 12 Mfx Eto Cs Z"},
	
	{"id":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Lfx Cm Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Lfx Eto Cs Z / 12 Lfx Eto Cs Z"},
	
	{"id":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Lfx Cm Pto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Lfx Pto Cs Z / 12 Lfx Pto Cs Z"},
	
	{"id":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Shorter Regimen", 
	"weightband":"30-50 kg",
	"composition":"4 Km Mfx Cfz Pto E H Z / 5 Mfx Cfz E Z "},	 
	
	{"id":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Mfx 6 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Mfx Bdq Lzd Cs Cfz / 14 Mfx Cs Cfz"},	
	
	{"id":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Mfx 12 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Mfx Bdq Lzd Cs Cfz / 6 Mfx Lzd Cs Cfz / 8 Mfx Cs Cfz"},	
	
	{"id":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Lfx 6 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Lfx Bdq Lzd Cs Cfz / 14 Lfx Cs Cfz"},	
	
	{"id":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Lfx 12 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Lfx Bdq Lzd Cs Cfz / 6 Lfx Lzd Cs Cfz / 8 Lfx Cs Cfz"},	
	
	{"rid":"", "gid":"5",
	"name":"Adult Drug-Resistant TB Longer Regimen", 
	"weightband":"46-55 kg",
	"composition":"6 Lfx Bdq Lzd Cs Cfz / 6 Lfx Lzd Cs Cfz / 12 Lfx Cs Cfz"},
	
	{"rid":"", "gid":"5",
	"name":"Adult Drug-Resistant TB Shorter Regimen Amikacin-based", 
	"weightband":"30-50 kg",
	"composition":"4 Am Mfx Cfz Pto E HH Z / 5 Mfx Cfz E Z"},	 
	
	{"rid":"", "gid":"5",
	"name":"Adult Drug-Resistant TB Shorter Regimen Bedaquiline-based", 
	"weightband":"30-50 kg",
	"composition":"4 Bdq Mfx Cfz Pto E HH Z / 5 Mfx Cfz E Z"},
	
	{"rid":"", "gid":"7",
	"name":"Paediatric Drug-Resistant TB", 
	"weightband":"10-15 kg",
	"composition":"12 Dlm Lzd Cfz Lfx Cs"},
	
	{"rid":"", "gid":"8",
	"name":"New Paediatric Drug-Resistant TB", 
	"weightband":"10-15 kg",
	"composition":"6 Lfx Cs Cfz Dlm Pas / 6 Lfx Cs Cfz Pas"},
	
	{"rid":"", "gid":"8",
	"name":"New modified Adult Drug-Resistant TB Shorter Regimen", 
	"weightband":"30-50 kg",
	"composition":"4 Lzd H BDQ Mfx Cfz E Z / 2 BDQ Mfx Cfz E Z / 3 Mfx Cfz E Z	"},	
	
	{"rid":"", "gid":"6", 
	"name":"Adult Latent TB Infection (6 H)", 
	"weightband":"> 50 kg",
	"composition":"6 H"},
	
	{"rid":"", "gid":"6", 
	"name":"Adult Latent TB Infection (4 R)", 
	"weightband":"> 50 kg",
	"composition":"4 R"},
	
	{"rid":"", "gid":"6", 
	"name":"Adult Latent TB Infection (4 RH)", 
	"weightband":"> 50 kg",
	"composition":"4 RH"},
	
	{"rid":"", "gid":"6", 
	"name":"Adult Latent TB Infection (3 HP)", 
	"weightband":"> 50 kg",
	"composition":"3 HP"},
	
	{"rid":"", "gid":"6", 
	"name":"Pediatric Latent TB Infection", 
	"weightband":"12-15 kg",
	"composition":"4 RH"},
];


var whomedicinedoses = [
{"id":"1", "gid":"8", "name":"Lfx-250", "weightband":"30-35", "dtype":"std", "dailydose":"3", "durationInMonth":""},
{"id":"2", "gid":"8", "name":"Lfx-250", "weightband":"36-45", "dtype":"std", "dailydose":"3", "durationInMonth":""},
{"id":"3", "gid":"8", "name":"Lfx-250", "weightband":"46-55", "dtype":"std", "dailydose":"4", "durationInMonth":""},
{"id":"4", "gid":"8", "name":"Lfx-250", "weightband":"56-70", "dtype":"std", "dailydose":"4", "durationInMonth":""},
{"id":"5", "gid":"8", "name":"Lfx-250", "weightband":"71-", "dtype":"std", "dailydose":"4", "durationInMonth":""},

{"id":"6", "gid":"8", "name":"Lfx-500", "weightband":"30-35", "dtype":"std", "dailydose":"1.5", "durationInMonth":""},
{"id":"7", "gid":"8", "name":"Lfx-500", "weightband":"36-45", "dtype":"std", "dailydose":"1.5", "durationInMonth":""},
{"id":"8", "gid":"8", "name":"Lfx-500", "weightband":"46-55", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"9", "gid":"8", "name":"Lfx-500", "weightband":"56-70", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"10", "gid":"8", "name":"Lfx-500", "weightband":"71-", "dtype":"std", "dailydose":"2", "durationInMonth":""},

{"id":"11", "gid":"8", "name":"Lfx-750", "weightband":"30-35", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"12", "gid":"8", "name":"Lfx-750", "weightband":"36-45", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"13", "gid":"8", "name":"Lfx-750", "weightband":"46-55", "dtype":"std", "dailydose":"1.5", "durationInMonth":""},
{"id":"14", "gid":"8", "name":"Lfx-750", "weightband":"56-70", "dtype":"std", "dailydose":"1.5", "durationInMonth":""},
{"id":"15", "gid":"8", "name":"Lfx-750", "weightband":"71-", "dtype":"std", "dailydose":"1.5", "durationInMonth":""},

{"id":"16", "gid":"8", "name":"Mfx-400", "weightband":"30-35", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"17", "gid":"8", "name":"Mfx-400", "weightband":"36-45", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"18", "gid":"8", "name":"Mfx-400", "weightband":"46-55", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"19", "gid":"8", "name":"Mfx-400", "weightband":"56-70", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"20", "gid":"8", "name":"Mfx-400", "weightband":"71-", "dtype":"std", "dailydose":"1", "durationInMonth":""},

{"id":"21", "gid":"8", "name":"Mfx-400", "weightband":"30-35", "dtype":"high", "dailydose":"1.5", "durationInMonth":""},
{"id":"22", "gid":"8", "name":"Mfx-400", "weightband":"36-45", "dtype":"high", "dailydose":"1.5", "durationInMonth":""},
{"id":"23", "gid":"8", "name":"Mfx-400", "weightband":"46-55", "dtype":"high", "dailydose":"2", "durationInMonth":""},
{"id":"24", "gid":"8", "name":"Mfx-400", "weightband":"56-70", "dtype":"high", "dailydose":"2", "durationInMonth":""},
{"id":"25", "gid":"8", "name":"Mfx-400", "weightband":"71-", "dtype":"high", "dailydose":"2", "durationInMonth":""},

{"id":"26", "gid":"8", "name":"Bdq-100", "weightband":"30-35", "dtype":"std", "dailydose":"4", "durationInMonth":"0.5"},
{"id":"27", "gid":"8", "name":"Bdq-100", "weightband":"36-45", "dtype":"std", "dailydose":"4", "durationInMonth":"0.5"},
{"id":"28", "gid":"8", "name":"Bdq-100", "weightband":"46-55", "dtype":"std", "dailydose":"4", "durationInMonth":"0.5"},
{"id":"29", "gid":"8", "name":"Bdq-100", "weightband":"56-70", "dtype":"std", "dailydose":"4", "durationInMonth":"0.5"},
{"id":"30", "gid":"8", "name":"Bdq-100", "weightband":"71-", "dtype":"std", "dailydose":"4", "durationInMonth":"0.5"},

{"id":"31", "gid":"8", "name":"Bdq-100", "weightband":"30-35", "dtype":"std", "dailydose":"0.87", "durationInMonth":"5.5"},
{"id":"32", "gid":"8", "name":"Bdq-100", "weightband":"36-45", "dtype":"std", "dailydose":"0.87", "durationInMonth":"5.5"},
{"id":"33", "gid":"8", "name":"Bdq-100", "weightband":"46-55", "dtype":"std", "dailydose":"0.87", "durationInMonth":"5.5"},
{"id":"34", "gid":"8", "name":"Bdq-100", "weightband":"56-70", "dtype":"std", "dailydose":"0.87", "durationInMonth":"5.5"},
{"id":"35", "gid":"8", "name":"Bdq-100", "weightband":"71-", "dtype":"std", "dailydose":"0.87", "durationInMonth":"5.5"},

{"id":"36", "gid":"8", "name":"Lnz-100", "weightband":"30-35", "dtype":"std", "dailydose":"4", "durationInMonth":""},
{"id":"37", "gid":"8", "name":"Lnz-100", "weightband":"36-45", "dtype":"std", "dailydose":"4", "durationInMonth":""},
{"id":"38", "gid":"8", "name":"Lnz-100", "weightband":"46-55", "dtype":"std", "dailydose":"4", "modurationInMonthnths":""},
{"id":"39", "gid":"8", "name":"Lnz-100", "weightband":"56-70", "dtype":"std", "dailydose":"4", "durationInMonth":""},
{"id":"40", "gid":"8", "name":"Lnz-100", "weightband":"71-", "dtype":"std", "dailydose":"4", "durationInMonth":""},

{"id":"41", "gid":"8", "name":"Cfz-50", "weightband":"30-35", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"42", "gid":"8", "name":"Cfz-50", "weightband":"36-45", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"43", "gid":"8", "name":"Cfz-50", "weightband":"46-55", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"44", "gid":"8", "name":"Cfz-50", "weightband":"56-70", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"45", "gid":"8", "name":"Cfz-50", "weightband":"71-", "dtype":"std", "dailydose":"2", "durationInMonth":""},

{"id":"46", "gid":"8", "name":"Cfz-100", "weightband":"30-35", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"47", "gid":"8", "name":"Cfz-100", "weightband":"36-45", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"48", "gid":"8", "name":"Cfz-100", "weightband":"46-55", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"49", "gid":"8", "name":"Cfz-100", "weightband":"56-70", "dtype":"std", "dailydose":"1", "durationInMonth":""},
{"id":"50", "gid":"8", "name":"Cfz-100", "weightband":"71-", "dtype":"std", "dailydose":"1", "durationInMonth":""},

{"id":"51", "gid":"8", "name":"Cs-250", "weightband":"30-35", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"52", "gid":"8", "name":"Cs-250", "weightband":"36-45", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"53", "gid":"8", "name":"Cs-250", "weightband":"46-55", "dtype":"std", "dailydose":"3", "durationInMonth":""},
{"id":"54", "gid":"8", "name":"Cs-250", "weightband":"56-70", "dtype":"std", "dailydose":"3", "durationInMonth":""},
{"id":"55", "gid":"8", "name":"Cs-250", "weightband":"71-", "dtype":"std", "dailydose":"3", "durationInMonth":""},

{"id":"56", "gid":"8", "name":"Trd-250", "weightband":"30-35", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"57", "gid":"8", "name":"Trd-250", "weightband":"36-45", "dtype":"std", "dailydose":"2", "durationInMonth":""},
{"id":"58", "gid":"8", "name":"Trd-250", "weightband":"46-55", "dtype":"std", "dailydose":"3", "durationInMonth":""},
{"id":"59", "gid":"8", "name":"Trd-250", "weightband":"56-70", "dtype":"std", "dailydose":"3", "durationInMonth":""},
{"id":"50", "gid":"8", "name":"Trd-250", "weightband":"71-", "dtype":"std", "dailydose":"3", "durationInMonth":""},

];

