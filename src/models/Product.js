export class Product {
    _id;
    name;
    categoryId;
    price;
   
    constructor(id, name, categoryId, price)
    {
        this._id=id;
        this.name=name;
        this.categoryId=categoryId;
        this.price=price;
    }
}
