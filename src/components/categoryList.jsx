import React, { Component } from 'react';
import { getCategories } from '../services/fakeCategoryService';
import Category from './category';
import { getProducts } from '../services/fakeProductService';
import ListGroup from './common/listGroup';


class CategoryList extends Component {
    state = {  
        categories:[],
        products:[],
        sortOrder: { path: 'name', order: 'asc'},
        selectedCategory: undefined
    }

    //might not actually need this here
    constructor(props)
    {
        super(props);
    }

    componentDidMount() {
        const categories = [{ _id:"", name:"All Items"}, ...getCategories()] //first item in the list is 'all items' followed by the array returned from getCategories()

        this.setState({products: getProducts(), categories: categories });
        console.log(categories);
    }

    //event handlers
    handleCategorySelect= (category) => {
        this.setState({ selectedCategory: category })
    } 

    getPageData = () => {
        //this will filter the products based on selected category, where to put this??? 
    //     const{ categories: allCategories, selectedCategory } = this.state;
    //    //if there is a category selected and it has an id (not the 'all categories' option) then filter on category
    //     const filteredCategories = selectedCategory && selectedCategory._id ?  

    //     return {totalCount: allCategories.length, data: }
    }



    render() { 

        const {categories, selectedCategory} = this.state;
        return ( 
            
            <div className="row">
                   {/* add text and value properties to keep the list group item decoupled and reusable */}
                 {/* <ListGroup 
                    items={this.state.categories} 
                    selectedItem={this.state.selectedCategory}
                    onItemSelect={this.handleCategorySelect} 
                 /> */}

                <ul className="list-group list-group-horizontal clickable" style={{flexDirection:"row", marginTop: 20}} >
                    {categories.map( (category) => (
                            <li className={ category === selectedCategory? "list-group-item active" : "list-group-item"} 
                            style={{marginRight: 20, marginBottom: 20}} 
                            key={category['_id']} 
                            onClick={() => this.props.onItemSelect(category)}>

                             { category['name'] }
                            </li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default CategoryList;

//this will be a horizontal list that will scroll to the left and right with little arrow buttons, like a js slider thing
//need to figure out how to do js animations to allow for many categories to be added and scrolled through

//will contain just a list of Category components