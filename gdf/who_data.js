var guidances = [
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


var regimen_comp = [
{"id":"1", "gid":"8", "gname":"Lfx-250", "wb":"30-35", "dtype":"std", "dose":"3", "months:"},
{"id":"2", "gid":"8", "gname":"Lfx-250", "wb":"36-45", "dtype":"std", "dose":"3"},
{"id":"3", "gid":"8", "gname":"Lfx-250", "wb":"46-55", "dtype":"std", "dose":"4"},
{"id":"4", "gid":"8", "gname":"Lfx-250", "wb":"56-70", "dtype":"std", "dose":"4"},
{"id":"5", "gid":"8", "gname":"Lfx-250", "wb":"71-", "dtype":"std", "dose":"4"},

{"id":"6", "gid":"8", "gname":"Lfx-500", "wb":"30-35", "dtype":"std", "dose":"1.5"},
{"id":"7", "gid":"8", "gname":"Lfx-500", "wb":"36-45", "dtype":"std", "dose":"1.5"},
{"id":"8", "gid":"8", "gname":"Lfx-500", "wb":"46-55", "dtype":"std", "dose":"2"},
{"id":"9", "gid":"8", "gname":"Lfx-500", "wb":"56-70", "dtype":"std", "dose":"2"},
{"id":"10", "gid":"8", "gname":"Lfx-500", "wb":"71-", "dtype":"std", "dose":"2"},

{"id":"11", "gid":"8", "gname":"Lfx-750", "wb":"30-35", "dtype":"std", "dose":"1"},
{"id":"12", "gid":"8", "gname":"Lfx-750", "wb":"36-45", "dtype":"std", "dose":"1"},
{"id":"13", "gid":"8", "gname":"Lfx-750", "wb":"46-55", "dtype":"std", "dose":"1.5"},
{"id":"14", "gid":"8", "gname":"Lfx-750", "wb":"56-70", "dtype":"std", "dose":"1.5"},
{"id":"15", "gid":"8", "gname":"Lfx-750", "wb":"71-", "dtype":"std", "dose":"1.5"},

{"id":"16", "gid":"8", "gname":"Mfx-400", "wb":"30-35", "dtype":"std", "dose":"1"},
{"id":"17", "gid":"8", "gname":"Mfx-400", "wb":"36-45", "dtype":"std", "dose":"1"},
{"id":"18", "gid":"8", "gname":"Mfx-400", "wb":"46-55", "dtype":"std", "dose":"1"},
{"id":"19", "gid":"8", "gname":"Mfx-400", "wb":"56-70", "dtype":"std", "dose":"1"},
{"id":"20", "gid":"8", "gname":"Mfx-400", "wb":"71-", "dtype":"std", "dose":"1"},

{"id":"21", "gid":"8", "gname":"Mfx-400", "wb":"30-35", "dtype":"high", "dose":"1.5"},
{"id":"22", "gid":"8", "gname":"Mfx-400", "wb":"36-45", "dtype":"high", "dose":"1.5"},
{"id":"23", "gid":"8", "gname":"Mfx-400", "wb":"46-55", "dtype":"high", "dose":"2"},
{"id":"24", "gid":"8", "gname":"Mfx-400", "wb":"56-70", "dtype":"high", "dose":"2"},
{"id":"25", "gid":"8", "gname":"Mfx-400", "wb":"71-", "dtype":"high", "dose":"2"},


{"id":"6", "gid":"8", "gname":"Lfx-250", "wb":"30-35", "dtype":"std", "dose":"3"},

	{"rcid":"1", "gname":"RHZ-75/50/150", "tbtid":"1", "":"2017", "Paed", "4-7", "1", "2", "60"
"2", "RH-75/50", "DSTB", "2017", "Paed", "4-7", "1", "4", "120"
"3", "RHZ-75/50/150", "DSTB", "2017", "Paed", "8-11", "2", "2", "120"
"4", "RH-75/50", "DSTB", "2017", "Paed", "8-11", "2", "4", "240"
"5", "RHZ-75/50/150", "DSTB", "2017", "Paed", "12-15", "3", "2", "180"
"6", "RH-75/50", "DSTB", "2017", "Paed", "12-15", "3", "4", "360"
"7", "RHZ-75/50/150", "DSTB", "2017", "Paed", "16-24", "4", "2", "240"
"8", "RH-75/50", "DSTB", "2017", "Paed", "16-24", "4", "4", "480"
];

