import * as React from 'react';
import { Component } from 'react';
import ProductList from '../components/productList';
import CategoryList from '../components/categoryList';
import Row from 'react-bootstrap/Row';

 //will contain the right half of the pos system, with the categories on top and the products on the bottom
 //this will be == to the movies component that brings all of the other child componenets together. I think. 
class Menu extends Component {
    state = {   }


    handleCategorySelect = () => {
        //take the chosen category and filter the products and then update the products component
    }


    render() { 
        return ( 
            <div>
                <Row>
                    <CategoryList onItemSelect={this.handleCategorySelect} /> 
                </Row>
                <Row>
                    <ProductList />
                </Row>
            </div>
         );
    }
}
 
export default Menu ;