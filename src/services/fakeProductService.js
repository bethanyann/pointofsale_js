

const products = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      name: "Fried Green Beans",
      category: { _id: "7b5383399b3345509667a892aa70d0d3", name: "Appetizers" },
      price: 6,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      name: "Big Beefy",
      category: { _id: "1ad4e872a7f74541a0414d0f44586bc7", name: "Sandwiches" },
      price: 6,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      name: "Strawberry Shortcake",
      category: { _id: "9a6c046de3d64d7cb079118938b27635", name: "Desserts" },
      price: 3.5,
    }
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
    
    export function getProducts(id) {
      return products.find(m => m._id === id);
    }
    
  