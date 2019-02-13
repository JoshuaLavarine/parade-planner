const parades = [
	{
		"name": "Krewe of Little Rascals",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "2/17/2019",
		"themes": ["children", "cars", "family"],
		"numberOfFloats": 85,
		"id": 1,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/37872354-littlerascals2-jpg0_cc32794e-5056-a36a-08469bbb1ddece75.jpg"

	},
	{
		"name": "Krewe of Excalibur",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "2/22/2019",
		"themes": ["trucks", "floats", "medieval", "magic"],
		"numberOfFloats": 112,
		"id": 2,
		"img": "https://www.hlimg.com/images/events/738X538/25mardi6502_1546063931e.jpg"
	},
	{
		"name": "Krewe of Babylon",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "2/28/2019",
		"themes": ["kings", "knights", "tradition", "legend"],
		"numberOfFloats": 35,
		"id": 3,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2015/02/0212-babylon-knights.jpg"
	},
	{
		"name": "Krewe of Caesar",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/23/2019",
		"themes": ["emperors", "romans", "dancers", "trucks", "gods", "monsters"],
		"numberOfFloats": 45,
		"id": 4,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/KA-2340_0c1a3c15-5056-a36a-08d6ab1bc42f2163.jpg"
	},
	{
		"name": "Krewe of Kings",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "2/24/2019",
		"themes": ["kings", "emperors", "trucks", "floats"],
		"numberOfFloats": 17,
		"id": 5,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/150115-F-BD983-0441_0ea1e79d-5056-a36a-087ea1cace8cf131.jpg"
	},
	{
		"name": "Krewe of Centurions",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "3/1/2019",
		"themes": ["swords", "centurion", "romans", "army", "marching"],
		"numberOfFloats": 40,
		"id": 6,
		"img": "https://cdn.shopify.com/s/files/1/1266/7435/files/About_the_Krewe_Page_-_0889.jpg?14448064482965298971"
	},
	{
		"name": "Krewe of Hermes",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "3/1/2019",
		"themes": ["greeks", "neon", "horses", "gods"],
		"numberOfFloats": 20,
		"id": 7,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2011/03/KreweHermes-0011.jpg"
	},
	{
		"name": "Krewe of Isis",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "6:00pm",
		"date": "3/2/2019",
		"themes": ["egyptians", "gods", "maids", "flip-flops", "nature", "magic", "goddess"],
		"numberOfFloats": 21,
		"id": 8,
		"img": "https://c1.staticflickr.com/1/148/404473157_c4079b62e8_z.jpg?zz=1"
	},
	{
		"name": "Krewe d'Etat",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "3/1/2019",
		"themes": ["horses", "dictator", "skulls", "skeletons"],
		"numberOfFloats": 21,
		"id": 9,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2017/02/IMG_0479-001.jpg"
	},
	{
		"name": "Krewe of Athena",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "3/3/2019",
		"themes": ["female-crew", "goddess", "greeks", "justice", "wisdom", "owls"],
		"numberOfFloats": 23,
		"id": 10,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/8/33/833180f5-7f46-5e55-9687-096b74b0a4fe/5751a6e382308.image.jpg"
	},
	{
		"name": "Krewe of Pandora",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "3/3/2019",
		"themes": ["greeks", "gods", "goddess", "female-crew", "box"],
		"numberOfFloats": 14,
		"id": 11,
		"img": "https://kreweofpandora.org/resources/Pictures/27750375_10155738078223551_47771076118303541_n.jpg"
	},
	{
		"name": "Krewe of Argus",
		"location": "Metairie",
		"dayOrNight": "am",
		"startTime": "10:00am",
		"date": "3/5/2019",
		"themes": ["greeks", "gods", "goddess", "peacock", "marching", "bands"],
		"numberOfFloats": 40,
		"id": 12,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/2/2d/22d302a1-b973-5562-a967-6cac9ff9ab4c/575185ecbe630.image.jpg"
	},
	{
		"name": "Krewe of Elks",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "3/5/2019",
		"themes": ["elks", "trucks", "oldest", "charity"],
		"numberOfFloats": 90,
		"id": 13,
		"img": "http://media.gulflive.com/mississippi-press-news/photo/ocean-springs-elks-parade-2014-096jpg-6222eba1d2a6548e.jpg"
	},
	{
		"name": "Krewe of Jefferson",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "2:00pm",
		"date": "3/5/2019",
		"themes": ["trucks", "last", "marching", "bands"],
		"numberOfFloats": 75,
		"id": 14,
		"img": "http://kreweofjefferson.com/uploads/3/4/1/6/34162067/1762972_orig.jpg"
	},
	{
		"name": "Krewe of Morpheus",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "3/1/2019",
		"themes": ["greeks", "dreams", "classic", "tradition"],
		"numberOfFloats": 20,
		"id": 15,
		"img": "http://i2.cdn.turner.com/cnn/dam/assets/140301174855-03-carnival-0301---restricted-horizontal-gallery.jpg"
	},
	{
		"name": "Krewe of Tucks",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "11:00am",
		"date": "3/2/2019",
		"themes": ["students", "irreverence", "satire", "toilet"],
		"numberOfFloats": 13,
		"id": 16,
		"img": "http://www.mardigrasparadeschedule.com/krewes/tucks/2017/images/Krewe-of-Tucks-2017-08584.jpg"
	},
	{
		"name": "Krewe of Okeanos",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "11:00am",
		"date": "3/3/2019",
		"themes": ["greeks", "oceans", "fertility", "masks"],
		"numberOfFloats": 20,
		"id": 17,
		"img": "http://www.mardigrasparadeschedule.com/krewes/okeanos/2017/images/Krewe-of-Okeanos-2017-09733.jpg"
	},
	{
		"name": "Krewe of Oshun",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:00pm",
		"date": "2/22/2019",
		"themes": ["goddess", "yoruba", "floats", "peacock", "kings"],
		"numberOfFloats": 15,
		"id": 18,
		"img": "https://expo.advance.net/img/4fd532b169/width960/294_03oshun01.jpeg"

	},
	{
		"name": "Krewe of Cleopatra",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/22/2019",
		"themes": ["female-crew", "beauty", "egyptians", "goddess"],
		"numberOfFloats": 19,
		"id": 19,
		"img": "https://i.pinimg.com/736x/d5/b8/0e/d5b80eb63d46f788f9ca5dc8b081027f.jpg"
	},
	{
		"name": "Krewe of Mid-City",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "11:45am",
		"date": "3/3/2019",
		"themes": ["children", "animation", "horses", "candy"],
		"numberOfFloats": 20,
		"id": 20,
		"img": "https://latonola.files.wordpress.com/2018/02/img_4883.jpg"
	},
	{
		"name": "Krewe of Pontchartrain",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "1:00pm",
		"date": "2/23/2019",
		"themes": ["floats", "fish", "marching", "aquatic", "bands"],
		"numberOfFloats": 19,
		"id": 21,
		"img": "http://www.mardigrasparadeschedule.com/krewes/pontchartrain/2018/images/2018-Krewe-of-Pontchartrain-00001317.jpg"
	},
	{
		"name": "Krewe of Choctaw",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "2:00pm",
		"date": "2/23/2019",
		"themes": ["mail", "chief", "wagons", "trucks", "marching"],
		"numberOfFloats": 18,
		"id": 22,
		"img": "https://media1.fdncms.com/gambit/imager/u/original/3201159/choctaw_cr_zachbrien.jpg"
	},
	{
		"name": "Krewe of Freret",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "2:30pm",
		"date": "2/23/2019",
		"themes": ["floats", "local", "masks", "youth", "marching"],
		"numberOfFloats": 12,
		"id": 23,
		"img": "http://www.mardigrasparadeschedule.com/krewes/freret/2018/images/2018-Krewe-of-Freret-00001572.jpg"
	},
	{
		"name": "Krewe of Thoth",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "3/3/2019",
		"themes": ["egyptians", "wisdom", "dice", "children"],
		"numberOfFloats": 50,
		"id": 24,
		"img": "http://www.mardigrasparadeschedule.com/krewes/thoth/2018/images/2018-Krewe-of-Thoth-00007439.jpg"
	},
	{
		"name": "Krewe of King Arthur",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "1:00pm",
		"date": "2/24/2019",
		"themes": ["medieval", "kings", "knights", "family", "grails"],
		"numberOfFloats": 55,
		"id": 25,
		"img": "http://www.mardigrasparadeschedule.com/krewes/kingarthur/2017/images/Krewe-of-King-Arthur-2017-04536.jpg"
	},
	{
		"name": "Krewe of Bacchus",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:15pm",
		"date": "3/3/2019",
		"themes": ["greeks", "gods", "wine", "animation"],
		"numberOfFloats": 31,
		"id": 26,
		"img": "http://www.mardigrasparadeschedule.com/krewes/bacchus/2018/images/2018-Krewe-of-Bacchus-00007724.jpg"
	},
	{
		"name": "Krewe of Druids",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/27/2019",
		"themes": ["celtics", "gods", "nature", "masks", "kings"],
		"numberOfFloats": 25,
		"id": 27,
		"img": "http://www.mardigrasparadeschedule.com/krewes/druids/2017/images/Krewe-of-Druids-2017-05313.jpg"
	},
	{
		"name": "Krewe of Nyx",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "2/27/2019",
		"themes": ["female-crew", "sisters", "greeks", "goddess", "purses"],
		"numberOfFloats": 27,
		"id": 28,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/9/00/90008282-3711-5e7b-b3f0-557ef69d2eaf/58ae7795b5b8b.image.jpg?resize=1157%2C630"
	},
	{
		"name": "Krewe of Rex",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "10:00am",
		"date": "3/5/2019",
		"themes": ["kings", "tradition", "floats"],
		"numberOfFloats": 50,
		"id": 29,
		"img": "https://www.rexorganization.com/assets/images/Home/splash6.jpg"
	},
	{
		"name": "Krewe of Muses",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/28/2019",
		"themes": ["greeks", "goddess", "muses", "charity", "cups", "masks"],
		"numberOfFloats": 50,
		"id": 30,
		"img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Krewe_of_Muses_Logo.gif"
	},
	{
		"name": "Krewe of Zulu",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "8:00am",
		"date": "3/5/2019",
		"themes": ["coconut", "warriors", "marching", "floats"],
		"numberOfFloats": 30,
		"id": 31,
		"img": "https://ssl.c.photoshelter.com/img-get2/I0000.AV.u9CH_Tg/fit=1000x750/Zulu-Tramps.jpg"
	}
]

module.exports = {
  parades
} 