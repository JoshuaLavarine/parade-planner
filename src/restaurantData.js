
const restaurants = [
    {
		"name": "Acme Oyster House",
    "location": "Metairie",
		"distance_to_parade": ".5 miles",
    "walk_to_parade": "10 minutes",
		"cuisine": ["seafood", "cajun", "creole", "classics"],
		"rating": 4.5,
		"img": "https://www.neworleansonline.com/images/slideshows/listings/2952/05.jpg",
		"website": "https://acmeoyster.com/metairie/"
	},
    {
		"name": "Zea Rotisserie & Bar",
    "location": "Metairie",
		"distance_to_parade": "1.7 miles",
    "walk_to_parade": "35 minutes",
		"cuisine": ["eclectic", "beer", "mediterranean", "teas"],
		"rating": 4.5,
		"img": "https://resizer.otstatic.com/v2/photos/wide-huge/24439769.jpg",
		"website": "http://zearestaurants.com/locations/metairie/"
	},
    {
		"name": "Bobby Hebert's Cajun Cannon",
    "location": "Metairie",
		"distance_to_parade": "1.3 miles",
    "walk_to_parade": "27 minutes",
		"cuisine": ["sports", "cajun", "creole", "classics", "seafood"],
		"rating": 4.4,
		"img": "https://bobbyheberts.com/wp-content/uploads/2018/02/logo.png",
		"website": "https://bobbyheberts.com/"
	},
    {
		"name": "Bonefish Grill",
    "location": "Metairie",
		"distance_to_parade": "2.1 miles",
    "walk_to_parade": "43 minutes",
		"cuisine": ["seafood", "cajun", "creole", "steaks", "modern"],
		"rating": 4.2,
		"img": "https://pbs.twimg.com/profile_images/560831988048072705/24fZjaki_400x400.jpeg",
		"website": "https://www.bonefishgrill.com/locations/la/metairie"
	},
    {
		"name": "The Harbor Bar & Grill",
    "location": "Metairie",
		"distance_to_parade": ".7 miles",
    "walk_to_parade": "14 minutes",
		"cuisine": ["american", "burgers", "fries", "chips"],
		"rating": 4.5,
		"img": "https://static1.squarespace.com/static/55551a4ae4b0de248142ee6c/t/5564cb5de4b0aa751611f192/1433901318169/Harbor+Logo+4.png?format=1000w",
		"website": "http://www.theharborbarandgrill.com/"
	},
    {
		"name": "Casablanca Restaurant",
    "location": "Metairie",
		"distance_to_parade": ".2 miles",
    "walk_to_parade": "3 minutes",
		"cuisine": ["kosher", "moroccan", "middle-eastern"],
		"rating": 4.3,
		"img": "https://www.crescentcityjewishnews.com/blog/wp-content/uploads/2016/09/IMG_3531-1024x768.jpg",
		"website": "http://kosherneworleans.com/_index.php"
	},
    {
		"name": "Andrea's Restaurant",
    "location": "Metairie",
		"distance_to_parade": ".6 miles",
    "walk_to_parade": "13 minutes",
		"cuisine": ["italian", "classic", "spaghetti", "lasagna"],
		"rating": 4.0,
		"img": "https://www.coolinaryneworleans.com/wp-content/uploads/2012/06/Andreas-Restaurant-Catering-resized-logo.jpg",
		"website": "https://www.andreasrestaurant.com/"
	},
    {
		"name": "Chef Ron's Gumbo Stop",
    "location": "Metairie",
		"distance_to_parade": "1.5 miles",
    "walk_to_parade": "30 minutes",
		"cuisine": ["seafood", "classic", "creole", "cajun"],
		"rating": 4.7,
		"img": "https://cdn.doordash.com/media/restaurant/cover/ChefRonsGumboStop2309MetairieLA.png",
		"website": "http://www.gumbostop.com/"
	},
    {
		"name": "Buffalo Wild Wings",
    "location": "Metairie",
		"distance_to_parade": ".3 miles",
    "walk_to_parade": "5 minutes",
		"cuisine": ["sports", "hamburgers", "chicken", "wings"],
		"rating": 3.7,
		"img": "https://www.blazinrewards.com/Assets/images/BWW-Logo_RGB-OnScreen_WhiteHoriz.png",
		"website": "https://www.buffalowildwings.com/en/food/?utm_source=extendednetwork&utm_medium=organic&utm_campaign=yext&utm_content=menu"
	},
    {
		"name": "Manny Randazzo King Cakes",
    "location": "Metairie",
		"distance_to_parade": ".6 miles",
    "walk_to_parade": "12 minutes",
		"cuisine": ["dessert", "king-cakes", "sweets", "pastries"],
		"rating": 4.6,
		"img": "https://image.dynamixse.com/s/crop/1200x500/https://static.whereyat.com/whereyatcom_950580522.jpg",
		"website": "https://randazzokingcake.com/"
	},
    {
		"name": "Lula Restaurant Distillery",
    "location": "Uptown New Orleans",
		"distance_to_parade": ".1 miles",
    "walk_to_parade": "3 minutes",
		"cuisine": ["rustic", "chic", "micro", "distillery"],
		"rating": 4.3,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/f/44/f4467d0d-fff9-5652-8e91-a46598c642a0/5b2bdf49cf76c.image.jpg?resize=400%2C267",
		"website": "http://www.lulanola.com/"
	},
    {
		"name": "Cochon Restaurant",
    "location" : "Uptown New Orleans",
		"distance_to_parade": "1.1 miles",
    "walk_to_parade": "22 minutes",
		"cuisine": ["pork", "cajun", "creole", "rotisserie"],
		"rating": 4.6,
		"img": "https://assets3.thrillist.com/v1/image/1849998/size/tmg-venue_carousel_mobile.jpg",
		"website": "https://cochonrestaurant.com/"
	},
    {
		"name": "Peche Seafood Grill",
    "location" : "Uptown New Orleans",
		"distance_to_parade": "1.1 miles",
    "walk_to_parade": "22 minutes",
		"cuisine": ["coal", "grill", "raw", "seafood", "rustic"],
		"rating": 4.6,
		"img": "http://globalflare.com/wp-content/uploads/2014/05/new-orleans-best-restaurant-in-america.jpg",
		"website": "https://www.pecherestaurant.com/"
	},
    {
		"name": "Galliano",
   	"location" : "Uptown New Orleans",
		"distance_to_parade": "1.3 miles",
    "walk_to_parade": "27 minutes",
		"cuisine": ["cajun", "modern", "seafood"],
		"rating": 4.5,
		"img": "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_800,q_75,w_640/v1/clients/neworleans/NOTMC_38634_8dda8ea1-0059-41a1-9493-785cf058e8f8.jpg",
		"website": "https://gallianorestaurant.com/index.html"
	},
    {
		"name": "Magazine Pizza",
    "location" : "Uptown New Orleans",
		"distance_to_parade": "1.0 miles",
    "walk_to_parade": "21 minutes",
		"cuisine": ["pizza", "italian", "creole", "classic"],
		"rating": 4.2,
		"img": "https://cdn.vox-cdn.com/thumbor/_Ky-9pn6hKWqXfmwbFuEfOPNN6A=/0x0:960x640/1200x900/filters:focal(404x244:556x396)/cdn.vox-cdn.com/uploads/chorus_image/image/57453545/16508442_10154987720602389_3272299060910275949_n.0.jpg",
		"website": "http://www.magazinepizza.com/zgrid/proc/site/sitep.jsp"
	},
    {
		"name": "Acme Oyster House",
    "location" : "Uptown New Orleans",
		"distance_to_parade": ".5 miles",
    "walk_to_parade": "10 minutes",
		"cuisine": ["seafood", "cajun", "creole", "classics"],
		"rating": 4.5,
		"img": "http://www.frenchquarter.com/wp-content/uploads/2017/07/acme-oyster-house-The-Best-Places-for-Oysters-in-the-French-Quarter-and-Nearby.jpg",
		"website": "https://acmeoyster.com/harrahs/"
	},
    {
		"name": "Parasol's",
    "location" : "Uptown New Orleans",
		"distance_to_parade": ".8 miles",
    "walk_to_parade": "15 minutes",
		"cuisine": ["seafood", "poboys", "creole", "fries"],
		"rating": 4.5,
		"img": "https://www.seriouseats.com/images/2014/09/20140626-Parasols-Crab-edit.jpg",
		"website": "https://www.facebook.com/ParasolsNOLA/"
	},
    {
		"name": "Poseidon Oyster Sushi Bar",
    "location" : "Uptown New Orleans",
		"distance_to_parade": ".4 miles",
    "walk_to_parade": "8 minutes",
		"cuisine": ["seafood", "cajun", "creole", "asian"],
		"rating": 4.4,
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vghzlJyFSJf35P7CFHrZPasirpB7PmkM679eECeygWNNBGPS",
		"website": "http://www.poseidonnola.com/"
	},
    {
		"name": "Surrey's Cafe and Juice Bar",
    "location" : "Uptown New Orleans",
		"distance_to_parade": ".3 miles",
    "walk_to_parade": "5 minutes",
		"cuisine": ["juice", "fruit", "coffee", "smoothies"],
		"rating": 4.7,
		"img": "https://www.dinersdriveinsdiveslocations.com/surreys-cafe-louisiana-food.jpg",
		"website": "http://www.surreysnola.com/"
	},
    {
		"name": "Seed",
    "location" : "Uptown New Orleans",
		"distance_to_parade": ".2 miles",
    "walk_to_parade": "4 minutes",
		"cuisine": ["vegan", "cakes", "desserts", "snacks"],
		"rating": 4.6,
		"img": "https://media-cdn.tripadvisor.com/media/photo-s/06/ed/b2/52/seed.jpg",
		"website": "https://www.facebook.com/seednola/"
	}
]


module.exports = {
  restaurants
} 