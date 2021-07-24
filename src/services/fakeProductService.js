

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
      _id: "28cfc6beca46435e95bec05824fa9230",
      name: "Caesar Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 8.59,
    },
    {
      _id: "2e7de602c6dd4af1b7cb8f1f8b5f990e",
      name: "Mixed Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 8.59,
    },
    {
      _id: "09b9ac40bcba47878717b30087a351bb",
      name: "Sriracha Steak Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 13.49,
    },
    {
      _id: "84a538fd91714158ae1c10d0fec48cfd",
      name: "Chipotle Cobb Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 9.49,
    },
    {
      _id: "8fbf9e22e3e5401ca10820df15906dce",
      name: "Side Mixed Green Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 4.89,
    },
    {
      _id: "4c6674b482f544cea8f6fc6b92d83de8",
      name: "Side Caesar Salad",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 4.89,
    },
    {
      _id: "b3e9dc96a4854ea79ffeff4d307e0f16",
      name: "Bowl of Soup",
      description: "",
      category: { _id: "c9dfd829e15c4c388596a2b3886fe300", name: "Soup & Salad" },
      price: 4.89,
    },
//SANDWICHES
    {
      _id: "857221ad456e424a913c3d8659b65ad7",
      name: "Cheesesteak",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 11.69,
    },
    {
      _id: "86724586ad5f4c6582be50e27b588ddf",
      name: "Reuben",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 9.99,
    },
    {
      _id: "98b0caf073e54f679a08d695a5300c9c",
      name: "Turkey Club",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 10.59,
    },
    {
      _id: "1828f165819f445a9642b97d71fa4064",
      name: "VeggieBelly",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 9.69,
    },
    {
      _id: "8a9f8f1b6b214b61bae1f6311916854a",
      name: "Belly Bahn Mi",
      description: "",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 9.89,
    },
//BURGERS
  {
    _id: "10d84d76a2fd4df9ad39f8809c450395",
    name: "All-American",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 9.99,
  },
  {
    _id: "bb11f78eba1b4070a5aa85d195f10d76",
    name: "Blackstone",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.99,
  },
  {
    _id: "5ef45396d8314b269d7b93b187dd89a9",
    name: "California Dreamin",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.99,
  },
  {
    _id: "1f6b6306653b4e498d903977fc15729e",
    name: "Cowabunga",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 11.49,
  },
  {
    _id: "a7dcfc2ef4fe4f1695a46f63566e663a",
    name: "Full-Leaded Jacket",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 12.49,
  },
  {
    _id: "ed1791dd61ed42f28ea58ea1af5d1a9a",
    name: "Key West",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.99,
  },
  {
    _id: "e1c19b178e5448e18f043e2746b611f4",
    name: "Lil Mike",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 9.89,
  },
  {
    _id: "32a2f9db09b6401784cf9e1e59a1e9b3",
    name: "Magic Mushroom",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.29,
  },
  {
    _id: "a1014ea89fe7422183beeac7854f1c0d",
    name: "Raspberry Beret",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.49,
  },
  {
    _id: "2b734a64cab848829a22e4b8b2ee260b",
    name: "Roundhouse",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 9.89,
  },
  {
    _id: "7010b6d030c242d9b79c8d5c5b41028f",
    name: "Royal Mountie",
    description: "",
    category: { _id: "6cd6c15065894be6a6a8e4874db48c79", name: "Burgers" },
    price: 10.49,
  },
//CLASSICS
  {
    _id: "6296cc2b93fb485d80b7e8638cbd841c",
    name: "Fish & Chips",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 12.49,
  },
  {
    _id: "844a3b2fbffa4c2aa00b93b08dfb6f7f",
    name: "Mac & Cheese",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 9.89,
  },
  {
    _id: "625aebdda80343d1b52c346ebb08a8aa",
    name: "Smokehouse",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 14.99,
  },
  {
    _id: "25f4ad19659743019956d04888ed5b86",
    name: "Steak Pommes Frites",
    description: "",
    category: { _id: "a08dab52706141b39abedc84280589ec", name: "Classics" },
    price: 17.29,
  },
//SIDES
  {
    _id: "ac65b579ea49487e981057d9a35128f5",
    name: "Cottage Cheese",
    description: "",
    category: { _id: "4fe664d44c7c40b59b0008cca3b7c87b", name: "Sides" },
    price: 1.59,
  },
  {
    _id: "b07c6d2b73f74795b748e9bdadef3233",
    name: "House Fries",
    description: "",
    category: { _id: "4fe664d44c7c40b59b0008cca3b7c87b", name: "Sides" },
    price: 2.29,
  },
  {
    _id: "96b4244dca6d408c954905a82ae1bd1d",
    name: "Steamed Broccoli",
    description: "",
    category: { _id: "4fe664d44c7c40b59b0008cca3b7c87b", name: "Sides" },
    price: 2.29,
  },

//DESSERTS
    {
      _id: "bd2425faea5649d4bbb4b0215ca2ed98",
      name: "Strawberry Shortcake",
      description: "",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    },
    {
      _id: "820cf5a63ac945108ba359bf63ed8ce4",
      name: "Irish Stout Pie",
      description: "",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    },
    {
      _id: "13e23f7618a741f8acfefe2f4f455f28",
      name: "Lemon Napoleon",
      description: "",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    },
//DRINKS
    {
      _id: "2dd7b15eb9a64c81849759f05b2b396c",
      name: "X-Rated on the Beach",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "1bf350e7b446492fb7d070539a030a8e",
      name: "Jargarita",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "b708826b002f4b039bbd2e0d7ba41de0",
      name: "Mojito",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "def147a200f14b019ccf728f2eb2e99b",
      name: "Redhead in Bed",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "aa286198c7ec41699be0219551d0927a",
      name: "Butterbeer",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "5a36683fd835472da0dd0b65f9b50208",
      name: "Bloody Mary",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "b8cdc3234c1c46988cdd536899ce5647",
      name: "Moscow Mule",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 8.00,
    },
    {
      _id: "b517787f8b4b4743b83d52c855da75db",
      name: "Boozy Toddy",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "e98251fb7824478e933a66d6d9187e05",
      name: "Mimosa",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "2cc5c6def184461aa66e21f9a1020c17",
      name: "Old Fashioned",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "cocktails"},
      price: 9.00,
    },
    {
      _id: "3eab0a5cd6c745748d202c4083299f1c",
      name: "Ginger Beer",
      description: "",
      category: { _id: "ea82990323bc418f9aaa86de505d94c2", name: "Drinks" },
      subcategory: { _id: "", name: "non-alcoholic"},
      price: 2.99,
    },
    {
      _id: "0dd6b05426614cfdaa32696a2015a12c",
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
    
  