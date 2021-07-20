

const products = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Terminator",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
      liked: true
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 5,
      dailyRentalRate: 2.5,
      liked: true
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 8,
      dailyRentalRate: 3.5
    }
  ];
  
  export {};  //fix this later
  
    export function getProducts() {
      return products;
    }
    
  //   export function getProducts(id:string) {
  //     return products.find(m => m._id === id);
  //   }
    
  //   export function saveMovie(product:Product) {
  //     let productInDb = movies.find(m => m._id === movie._id) || {};
  //     movieInDb.name = movie.name;
  //     movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  //     movieInDb.numberInStock = movie.numberInStock;
  //     movieInDb.dailyRentalRate = movie.dailyRentalRate;
    
  //     if (!movieInDb._id) {
  //       movieInDb._id = Date.now();
  //       movies.push(movieInDb);
  //     }
    
  //     return movieInDb;
  //   }
    
  //   export function deleteMovie(id) {
  //     let movieInDb = movies.find(m => m._id === id);
  //     movies.splice(movies.indexOf(movieInDb), 1);
  //     return movieInDb;
  //   }