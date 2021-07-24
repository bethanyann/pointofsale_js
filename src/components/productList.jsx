import React, { Component } from 'react';
import Product  from '../components/product';
//import Column from 'react-bootstrap/CardColumns'

import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

class ProductList extends Component {
    //state = {  }
  

    render() { 
        const {products, onItemSelect} = this.props;

        console.log(products);
        //return (null);
        return ( 
            //take 'justify-content-center' off if i don't want the cards centered anymore and want 
            //the left margin to align with the categories
            //<Row xs={2} sm={4} md={8} className="g-2 justify-content-center">
            <Row xs={2} sm={4} md={8} className="g-2" style={{marginLeft:"50px"}}>
                 {products.map((product) => (
                    <Product
                    style={{display: "inline"}}
                    key={product._id}
                    data={product}
                    onItemSelect={onItemSelect} />
                ))}     
            </Row>
         );
    }
}
 
export default ProductList;

//list of products in each category - will need to grab the category selected and display products accordingly

//might want to implement pagination? multiple pages of products? 