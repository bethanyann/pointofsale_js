import * as React from 'react';
import { Component } from 'react';
import ProductList from '../components/productList';
import CategoryList from '../components/categoryList';
import Row from 'react-bootstrap/Row';
import { getCategories } from '../services/fakeCategoryService';
import { getProducts } from '../services/fakeProductService';
import ProductDetails from '../components/productDetails';

 //will contain the right half of the pos system, with the categories on top and the products on the bottom
 //this will be == to the movies component that brings all of the other child componenets together. I think. 
class Menu extends Component {
    state = {  
        categories:[],
        products:[],
        sortOrder: { path: 'name', order: 'asc'},
        selectedCategory:{},
        productDetailsVisible: false
     }

    componentDidMount() {
        //get the categories and products here - switch over to database when thats implemented
        const categories = [{ _id:"", name:"All Items"}, ...getCategories()] //first item in the list is 'all items' followed by the array returned from getCategories()

        this.setState({products: getProducts(), categories: categories });
        //console.log(categories);
    }

    //Event Handlers
    handleCategorySelect = (category) => {
        //take the chosen category and filter the products and then update the products component
        //this.setState({selectedCategory: category, currentPage: 1})
        //console.log('category selected: ' + category + 'category id: ' + category._id)
        this.setState({ selectedCategory: category })

        //console.log('selected category: ' + this.state.selectedCategory);
    }

    handlePageChange = () => {
        //might just have a scrolling component instead of swapping pages 
    }

    handleProductSelect = (product) => {
            console.log("this product was clicked on:" + JSON.stringify(product));

            //toggle the product menu here
            this.setState({productDetailsVisible : !this.state.productDetailsVisible});
    }


    //get data for the page loaded
    getProductData = () => {
        const {
            products,
            selectedCategory
        } = this.state;

      //here is where we will filter the products based on selected category
      const filteredProducts = selectedCategory && selectedCategory._id ? products.filter(m => m.category._id === selectedCategory._id) : products;
      
      //console.log('filtered products:' + filteredProducts);
      //return filtered products
      return {totalProductCount: filteredProducts.length, data: filteredProducts};
    }

    render() { 
        const {length: productsCount} = this.state.products;
        if(productsCount === 0) return <p> No products found for this category. </p>

        const {totalProductCount, data} = this.getProductData();

        return ( 
            <div>
                <Row>
                    <CategoryList 
                        items={this.state.categories}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleCategorySelect} 
                    /> 
                </Row>
                <Row>
                    <p>{totalProductCount} products in this category</p>
                    <ProductList 
                        style={{height: 300}}
                        products={data}
                        onItemSelect={this.handleProductSelect}//have the slide menu come out display selected product
                    />
                    <ProductDetails></ProductDetails>
                </Row>
            </div>
         );
    }
}
 
export default Menu ;