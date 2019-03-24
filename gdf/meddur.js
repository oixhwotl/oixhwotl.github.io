var tbtype = [
	{"tbtid":"1", "name":"Drug-Susceptible TB", "name2":"DS TB"},
	{"tbtid":"2", "name":"Drug-Resistant TB", "name2":"DR TB"},
	{"tbtid":"3", "name":"Latent TB Infection", "name2":"LTBI"}
];
var guidances = [
	{"gid":"1", "tbtid":"1", 
	"name":"WHO Guidelines Drug-Susceptible TB 2010", 
	"yearPublished":"2010"},
	
	{"gid":"2", "tbtid":"1", 
	"name":"WHO Guidelines Drug-Susceptible TB 2017", 
	"yearPublished":"2017"},
	
	{"gid":"3", "tbtid":"2",
	"name":"WHO Guidelines on Drug-Resistant TB 2014", 
	"yearPublished":"2014"},
	
	{"gid":"4", "tbtid":"2", 
	"name":"WHO Guidelines on Drug-Resistant TB 2016", 
	"yearPublished":"2016"},
	
	{"gid":"5", "tbtid":"2", 
	"name":"WHO Rapid Communication on Drug-Resistant TB 2018", 
	"yearPublished":"2018"},
	
	{"gid":"6", "tbtid":"3", 
	"name":"WHO Guidelines Latent TB Infection 2018", 
	"yearPublished":"2018"},
	
	{"gid":"7", "tbtid":"2", 
	"name":"WHO Rapid Communication on Drug-Resistant TB 2018 and Expert Opinion",
	"yearPublished":"2018"},
	
	{"gid":"8", "tbtid":"2", 
	"name":"New WHO Rapid Communication on Drug-Resistant TB",
	"yearPublished":"2019"}
];

var regimens = [
	{"rid":"1", "gid":"2", 
	"name":"Adult Drug-Susceptible TB", 
	"weightband":"55-70 kg", 
	"composition":"2 RHZE(150/75/400/275) / 4 RH(150/75)"},
	
	{"rid":"2", "gid":"2", 
	"name":"Pediatric Drug-Susceptible TB", 
	"weightband":"12-15 kg", 
	"composition":"2 RHZ(75/50/150)/ 4 RH(75/50)"},
	
	{"rid":"3", "gid":"2", 
	"name":"Pediatric Drug-Susceptible TB (include ethambutol)", 
	"weightband":"12-15 kg", 
	"composition":"2 RHZ(75/50/150) E(100) / 4 RH(75/50) E(100)"},
	
	{"rid":"4", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Km Eto, MDR-TB Conventional", 
	"weightband":"46-55 kg",
	"composition":"8 Km Lfx Eto Cs Z / 12 Lfx Eto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Mfx Km Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Km Mfx Eto Cs Z / 12 Mfx Eto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Lfx Km Pto", 
	"weightband":"46-55 kg",
	"composition":"8 Km Lfx Pto Cs Z / 12 Lfx Pto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Mfx Cm Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Mfx Eto Cs Z / 12 Mfx Eto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Mfx Cm Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Mfx Eto Cs Z / 12 Mfx Eto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Lfx Cm Eto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Lfx Eto Cs Z / 12 Lfx Eto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Longer Regimen Lfx Cm Pto", 
	"weightband":"46-55 kg",
	"composition":"8 Cm Lfx Pto Cs Z / 12 Lfx Pto Cs Z"},
	
	{"rid":"", "gid":"4",
	"name":"Adult Drug-Resistant TB Shorter Regimen", 
	"weightband":"30-50 kg",
	"composition":"4 Km Mfx Cfz Pto E H Z / 5 Mfx Cfz E Z "},	 
	
	{"rid":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Mfx 6 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Mfx Bdq Lzd Cs Cfz / 14 Mfx Cs Cfz"},	
	
	{"rid":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Mfx 12 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Mfx Bdq Lzd Cs Cfz / 6 Mfx Lzd Cs Cfz / 8 Mfx Cs Cfz"},	
	
	{"rid":"", "gid":"8",
	"name":"New Adult Drug-Resistant TB Longer Regimen Lfx 6 Lzd", 
	"weightband":"46-55 kg",
	"composition":"6 Lfx Bdq Lzd Cs Cfz / 14 Lfx Cs Cfz"},	
	
	{"rid":"", "gid":"8",
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
	{"rcid":"1", "rid":"1", },
];







