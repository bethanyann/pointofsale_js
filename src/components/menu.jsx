import * as React from 'react';
import { Component } from 'react';
import ProductList from '../components/productList';
import CategoryList from '../components/categoryList';

 //will contain the right half of the pos system, with the categories on top and the products on the bottom
class Menu extends Component {
    state = {   }


    handleCategorySelect = () => {

    }


    render() { 
        return ( 
            <div>
                <div className="row">
                    <CategoryList 
                        onItemSelect={this.handleCategorySelect}
                    /> 
                </div>
                <div className="row">
                    <ProductList />
                </div>
            </div>
         );
    }
}
 
export default Menu ;