

const products = [
  //APPETIZERS
    {
      _id: "b46affc330484b0fa8e079034e1dd25b",
      name: "Poutine",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 9.99, //store as double, add currency sign later
      image: ""
    },
    {
      _id: "2eeb099b01af4977b42e64ce8cf01085",
      name: "Guac & Chips",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 6.99, 
    },
    {
      _id: "c87b92f085fb4b199e4bfa365dfd8542",
      name: "Onion Rings",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 9.99, 
    },
    {
      _id: "1136a1bfdfe04edb99161cc1a0318579",
      name: "Philly Egg Rolls",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 8.99, 
    },
    {
      _id: "feba61aa7a4543958e4b3e53aee3c432",
      name: "Queso & Chips",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 6.99, 
    },
    {
      _id: "a7d6de92d91542a3a05601de2172552e",
      name: "Salsa & Chips",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 6.29, 
    },
    {
      _id: "4f6320760b1149b8aa6fded8834f95bc",
      name: "Stadium Nachos",
      description: "",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 6.29, 
    },
//SALAD & SOUP
    {
      _id: "",
      name: "Caesar Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 8.59,
    },
    {
      _id: "",
      name: "Mixed Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 8.59,
    },
    {
      _id: "",
      name: "Sriracha Steak Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 13.49,
    },
    {
      _id: "",
      name: "Chipotle Cobb Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 9.49,
    },
    {
      _id: "",
      name: "Side Mixed Green Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 4.89,
    },
    {
      _id: "",
      name: "Side Caesar Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 4.89,
    },
    {
      _id: "",
      name: "Bowl of Soup",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 4.89,
    },
//SANDWICHES
    {
      _id: "",
      name: "Cheesesteak",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 11.69,
    },
    {
      _id: "",
      name: "Reuben",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 9.99,
    },
    {
      _id: "",
      name: "Turkey Club",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 10.59,
    },
    {
      _id: "",
      name: "VeggieBelly",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 9.69,
    },
    {
      _id: "",
      name: "Belly Bahn Mi",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 9.89,
    },
//BURGERS
  {
    _id: "",
    name: "All-American",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 9.99,
  },
  {
    _id: "",
    name: "Blackstone",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.99,
  },
  {
    _id: "",
    name: "California Dreamin",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.99,
  },
  {
    _id: "",
    name: "Cowabunga",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 11.49,
  },
  {
    _id: "",
    name: "Full-Leaded Jacket",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 12.49,
  },
  {
    _id: "",
    name: "Key West",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.99,
  },
  {
    _id: "",
    name: "Lil Mike",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 9.89,
  },
  {
    _id: "",
    name: "Magic Mushroom",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.29,
  },
  {
    _id: "",
    name: "Raspberry Beret",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.49,
  },
  {
    _id: "",
    name: "Roundhouse",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 9.89,
  },
  {
    _id: "",
    name: "Royal Mountie",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.49,
  },
//CLASSICS
  {
    _id: "",
    name: "Fish & Chips",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 12.49,
  },
  {
    _id: "",
    name: "Mac & Cheese",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 9.89,
  },
  {
    _id: "",
    name: "Smokehouse",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 14.99,
  },
  {
    _id: "",
    name: "Steak Pommes Frites",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 17.29,
  },
//SIDES
  {
    _id: "",
    name: "Cottage Cheese",
    description: "",
    category: { _id: "4fe664d44c7c40b59b0008cca3b7c87b", name: "Sides" },
    price: 1.59,
  },
  {
    _id: "",
    name: "House Fries",
    description: "",
    category: { _id: "4fe664d44c7c40b59b0008cca3b7c87b", name: "Sides" },
    price: 2.29,
  },
  {
    _id: "",
    name: "Steamed Broccoli",
    description: "",
    category: { _id: "4fe664d44c7c40b59b0008cca3b7c87b", name: "Sides" },
    price: 2.29,
  },

//DESSERTS
    {
      _id: "",
      name: "Strawberry Shortcake",
      description: "",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    },
    {
      _id: "",
      name: "Irish Stout Pie",
      description: "",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    },
    {
      _id: "",
      name: "Lemon Napoleon",
      description: "",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    },
//DRINKS
    {
      _id: "",
      name: "X-Rated on the Beach",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Jargarita",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Mojito",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Redhead in Bed",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Butterbeer",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Bloody Mary",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Moscow Mule",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 8.00,
    },
    {
      _id: "",
      name: "Boozy Toddy",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Mimosa",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Old Fashioned",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "",
      name: "Ginger Beer",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "non-alcoholic"},
      price: 2.99,
    },
    {
      _id: "",
      name: "Red Bull",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "non-alcoholic"},
      price: 2.99,
    },
  ];



  
  // 7b5383399b3345509667a892aa70d0d3 - appetizers
  // c9dfd829e15c4c388596a2b3886fe300 - salad & soup
  // 6cd6c15065894be6a6a8e4874db48c79 - burgers
  // 1ad4e872a7f74541a0414d0f44586bc7 - sandwiches
  // a08dab52706141b39abedc84280589ec - classics
  // 4fe664d44c7c40b59b0008cca3b7c87b - sides
  // 9a6c046de3d64d7cb079118938b27635 - desserts
  // ea82990323bc418f9aaa86de505d94c2 - drinks

    export function getProducts() {
      return products;
    }
    
    export function getProduct(id) {
      return products.find(m => m._id === id);
    }
    
  