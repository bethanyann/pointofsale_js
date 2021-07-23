import React, { Component } from 'react';
import Product  from '../components/product';
class ProductList extends Component {
    //state = {  }
  

    render() { 
        const {products, onItemSelect} = this.props;

        console.log(products);
        //return (null);
        return ( 
            <div>
                {products.map((product) => (
                    <Product
                    style={{display: "inline"}}
                    key={product._id}
                    data={product}
                    onItemSelect={onItemSelect} />
                ))}
                
            </div>
         );
    }
}
 
export default ProductList;

//list of products in each category - will need to grab the category selected and display products accordingly

//might want to implement pagination? multiple pages of products? 