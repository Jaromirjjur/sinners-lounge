const drinks = [
    {
      name: "Martini",
      ingredients: ["gin", "dry vermouth"],
      image: "images/martini.jpg",
      recipePage: 18
    },
    {
      name: "Tom Collins",
      ingredients: ["gin", "lemon juice", "sugar syrup", "sparkling water"],
      image: "images/tom-collins.jpg",
      recipePage: 19
    },
    {
      name: "Belle Collins",
      ingredients: ["gin", "lemon juice", "sugar syrup", "sparkling water"],
      image: "images/belle-collins.jpg",
      recipePage: 19
    },
    {
      name: "Gin Rickey",
      ingredients: ["gin", "lime juice", "sparkling water"],
      image: "images/gin-rickey.jpg",
      recipePage: 20
    },
    {
      name: "Palm Beach",
      ingredients: ["gin", "white rum", "pineapple juice"],
      image: "images/palm-beach.jpg",
      recipePage: 22
    },
    {
      name: "Gin Sling",
      ingredients: ["gin"],
      image: "images/gin-sling.jpg",
      recipePage: 23
    },
    {
      name: "Maiden's Prayer",
      ingredients: ["gin", "triple sec", "orange juice", "lemon juice"],
      image: "images/maidens-prayer.jpg",
      recipePage: 23
    },
    {
      name: "Daisy",
      ingredients: ["gin", "grenadine", "lemon juice", "sugar syrup", "sparkling water"],
      image: "images/daisy.jpg",
      recipePage: 24
    },
    {
      name: "Hawaiian Orange Blossom",
      ingredients: ["gin", "triple sec", "orange juice", "pineapple juice"],
      image: "images/hawaiian-orange-blossom.jpg",
      recipePage: 26
    },
    {
      name: "Pussycat",
      ingredients: ["gin", "grenadine", "pineapple juice"],
      image: "images/pussycat.jpg",
      recipePage: 31
    },
    {
      name: "The Blue Train",
      ingredients: ["gin", "triple sec", "blue curacao", "lemon juice"],
      image: "images/blue-train.jpg",
      recipePage: 33
    },
    {
      name: "Cosmopolitan",
      ingredients: ["vodka", "triple sec", "lime juice", "cranberry juice"],
      image: "images/cosmopolitan.jpg",
      recipePage: 36
    },
    {
      name: "Woo-Woo",
      ingredients: ["vodka", "peach schnapps", "cranberry juice"],
      image: "images/woo-woo.jpg",
      recipePage: 37
    },
    {
      name: "Sex On The Beach",
      ingredients: ["vodka", "peach schnapps", "orange juice", "cranberry juice", "lemon juice"],
      image: "images/sex-on-the-beach.jpg",
      recipePage: 38
    },
    {
      name: "Fuzzy Navel",
      ingredients: ["vodka", "peach schnapps", "orange juice"],
      image: "images/fuzzy-navel.jpg",
      recipePage: 38
    },
    {
      name: "Salty Dog",
      ingredients: ["vodka", "grapefruit juice"],
      image: "images/salty-dog.jpg",
      recipePage: 39
    },
    {
      name: "Blue Monday",
      ingredients: ["vodka", "cointreau", "blue curacao"],
      image: "images/blue-monday.jpg",
      recipePage: 43
    },
    {
      name: "Mimi",
      ingredients: ["vodka", "coconut cream", "pineapple juice"],
      image: "images/mimi.jpg",
      recipePage: 48
    },
    {
      name: "Sea Breeze",
      ingredients: ["vodka", "cranberry juice", "pink grapefruit juice"],
      image: "images/sea-breeze.jpg",
      recipePage: 50
    },
    {
      name: "Screwdriver",
      ingredients: ["vodka", "orange juice"],
      image: "images/screwdriver.jpg",
      recipePage: 51
    },
    {
      name: "Daiquiri",
      ingredients: ["rum", "lime juice", "sugar"],
      image: "images/daiquiri.jpg",
      recipePage: 56
    },
    {
      name: "Piña Colada",
      ingredients: ["rum", "pineapple juice", "coconut cream"],
      image: "images/pina-colada.jpg",
      recipePage: 58
    },
    {
      name: "Club Mojito",
      ingredients: ["rum", "angostura bitters", "sugar syrup", "lime", "mint", "sparkling water"],
      image: "images/club-mojito.jpg",
      recipePage: 58
    },
    {
      name: "Ocean Breeze",
      ingredients: ["rum", "amaretto", "blue curacao", "pineapple juice", "sparkling water"],
      image: "images/ocean-breeze.jpg",
      recipePage: 61
    },
    {
      name: "Blue Hawaiian",
      ingredients: ["rum", "blue curacao", "pineapple juice", "coconut cream"],
      image: "images/blue-hawaiian.jpg",
      recipePage: 61
    },
    {
      name: "Cuba Libre",
      ingredients: ["rum", "cola"],
      image: "images/cuba-libre.jpg",
      recipePage: 64
    },
    {
      name: "Cuban Special",
      ingredients: ["rum", "triple sec", "lime juice", "pineapple juice"],
      image: "images/cuban-special.jpg",
      recipePage: 64
    },
    {
      name: "Rum Cobbler",
      ingredients: ["rum", "sparkling water"],
      image: "images/rum-cobbler.jpg",
      recipePage: 65
    },
    {
      name: "Frozen Peach Daiquiri",
      ingredients: ["rum", "lime juice", "sugar syrup", "peach"],
      image: "images/frozen-peach-daiquiri.jpg",
      recipePage: 66
    },
    {
      name: "Rum Cooler",
      ingredients: ["rum", "pineapple juice", "lime juice", "banana"],
      image: "images/rum-cooler.jpg",
      recipePage: 67
    },
    {
      name: "Whiskey Sour",
      ingredients: ["whiskey", "lime juice", "sugar syrup"],
      image: "images/whiskey-sour.jpg",
      recipePage: 68
    },
    {
      name: "Whiskey Rickey",
      ingredients: ["whiskey", "lime juice", "sparkling water"],
      image: "images/whiskey-rickey.jpg",
      recipePage: 68
    },
    {
      name: "Highland Fling",
      ingredients: ["whiskey", "sweet vermouth", "angostura bitters"],
      image: "images/highland-fling.jpg",
      recipePage: 69
    },
    {
      name: "Whiskey Sling",
      ingredients: ["whiskey", "lemon juice"],
      image: "images/whiskey-sling.jpg",
      recipePage: 69
    },
    {
      name: "Miami Beach",
      ingredients: ["whiskey", "dry vermouth" "pink grapefruit juice"],
      image: "images/miami-beach.jpg",
      recipePage: 70
    },
    {
      name: "Manhattan",
      ingredients: ["whiskey", "sweet vermouth", "angostura bitters"],
      image: "images/manhattan.jpg",
      recipePage: 73
    },
    {
      name: "Old Fashioned",
      ingredients: ["whiskey", "angostura bitters"],
      image: "images/old-fashioned.jpg",
      recipePage: 73
    },
    {
      name: "Flying Scotsman",
      ingredients: ["whiskey", "sweet vermouth", "angostura bitters", "sugar syrup"],
      image: "images/flying-scotsman.jpg",
      recipePage: 76
    },
    {
      name: "Beadlestone",
      ingredients: ["whiskey", "dry vermouth"],
      image: "images/beadlestone.jpg",
      recipePage: 76
    },
    {
      name: "Thistle",
      ingredients: ["whiskey", "sweet vermouth", "angostura bitters"],
      image: "images/thistle.jpg",
      recipePage: 77
    },
    {
      name: "Midnight Cowboy",
      ingredients: ["brandy", "coffee liquer", "cream", "cola"],
      image: "images/midnight-cowboy.jpg",
      recipePage: 79
    },
    {
      name: "Brandy Sour",
      ingredients: ["brandy", "lime juice", "sugar syrup"],
      image: "images/brandy-sour.jpg",
      recipePage: 80
    },
    {
      name: "Sidecar",
      ingredients: ["brandy", "triple sec", "lemon juice"],
      image: "images/sidecar.jpg",
      recipePage: 81
    },
    {
      name: "Brandy Julep",
      ingredients: ["brandy", "sugar syrup"],
      image: "images/brandy-julep.jpg",
      recipePage: 81
    },
    {
      name: "Hot Brandy Chocolate",
      ingredients: ["brandy", "milk", "cream", "chocolate"],
      image: "images/hot-brandy-chocolate.jpg",
      recipePage: 87
    },
    {
      name: "Diamond Fizz",
      ingredients: ["champagne", "gin", "lemon juice", "sugar syrup"],
      image: "images/diamond-fizz.jpg",
      recipePage: 91
    },
    {
      name: "Champagne Sidecar",
      ingredients: ["champagne", "brandy", "cointreau", "lemon juice"],
      image: "images/champagne-sidecar.jpg",
      recipePage: 91
    },
    {
      name: "Champagne Cocktail",
      ingredients: ["champagne", "brandy", "angostura bitters", "sugar"],
      image: "images/champagne-cocktail.jpg",
      recipePage: 92
    },
    {
      name: "Champagne Pick-Me-Up",
      ingredients: ["champagne", "brandy", "grenadine", "orange juice", "lemon juice"],
      image: "images/champagne-pick-me-up.jpg",
      recipePage: 93
    },
    {
      name: "Buck's Fizz",
      ingredients: ["champagne", "orange juice"],
      image: "images/bucks fizz.jpg",
      recipePage: 94
    },
    {
      name: "London French 75",
      ingredients: ["champagne", "gin", "lemon juice"],
      image: "images/london-french-75.jpg",
      recipePage: 95
    },
    {
      name: "Bellini",
      ingredients: ["champagne", "peach juice", "sugar"],
      image: "images/bellini.jpg",
      recipePage: 96
    },
    {
      name: "Flirtini",
      ingredients: ["champagne", "vodka", "cointreau", "pineapple juice"],
      image: "images/flirtini.jpg",
      recipePage: 105
    },
    {
      name: "Amarettine",
      ingredients: ["champagne", "amaretto", "dry vermouth"],
      image: "images/amarettine.jpg",
      recipePage: 107
    },
    {
      name: "The Queen's Cousin",
      ingredients: ["champagne", "vodka", "orange liqueur", "triple sec", "angostura bitters", "lime juice"],
      image: "images/the-queens-cousin.jpg",
      recipePage: 111
    },
    {
      name: "Midnight's Kiss",
      ingredients: ["champagne", "vodka", "blue curacao", "sugar"],
      image: "images/midnights-kiss.jpg",
      recipePage: 112
    },
    {
      name: "Pretty In Pink",
      ingredients: ["champagne", "lemonade", "cranberry juice"],
      image: "images/pretty-in-pink.jpg",
      recipePage: 113
    },
    {
      name: "El Toro",
      ingredients: ["tequila", "coffee liqueur", "cream"],
      image: "images/el-toro.jpg",
      recipePage: 124
    },
    {
      name: "High Voltage",
      ingredients: ["tequila", "peach schnapps", "lime juice"],
      image: "images/high-voltage.jpg",
      recipePage: 125
    },
    {
      name: "Silk Stockings",
      ingredients: ["tequila", "raspberry liqueur", "creme de cacao", "double cream"],
      image: "images/silk-stockings.jpg",
      recipePage: 125
    },
    {
      name: "Tequila Slammer",
      ingredients: ["champagne", "tequila", "lemon juice"],
      image: "images/tequila-slammer.jpg",
      recipePage: 126
    },
    {
      name: "Tequila Sunrise",
      ingredients: ["tequila", "grenadine", "orange juice"],
      image: "images/tequila-sunrise.jpg",
      recipePage: 127
    },
    {
      name: "Banana Daiquiri",
      ingredients: ["rum", "triple sec", "lime juice", "sugar syrup", "cream", "banana"],
      image: "images/banana-daiquiri.jpg",
      recipePage: 137
    },
    {
      name: "Blue Lagoon",
      ingredients: ["vodka", "blue curacao", "lemon juice", "lemonade"],
      image: "images/blue-lagoon.jpg",
      recipePage: 140
    },
    {
      name: "White Russian",
      ingredients: ["vodka", "coffee liqueur", "cream"],
      image: "images/white-russian.jpg",
      recipePage: "-"
    }
  ];
