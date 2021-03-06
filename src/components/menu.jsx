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
        productDetailsVisible: false,
        selectedProduct: undefined
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
        this.setState({ selectedCategory: category })
    }

    handlePageChange = () => {
        //might just have a scrolling component instead of swapping pages 
    }

    handleProductSelect = (product) => {
            console.log("this product was clicked on:" + JSON.stringify(product));
            const visible = !this.state.productDetailsVisible ? true : false;
            //toggle the product menu here
            this.setState({productDetailsVisible : visible, selectedProduct : product});
    }

    // handleAddProduct = (orderProduct) => {
    //     console.log("product to add to the order:" + JSON.stringify(orderProduct));
    // }
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
                <Row style={{marginTop: "30px"}}>
                    {/* <p>{totalProductCount} products in this category</p> */}
                    <ProductList 
                        style={{height: 300}}
                        products={data}
                        onItemSelect={this.handleProductSelect}//have the slide menu come out display selected product
                    />
                    <ProductDetails
                        visible={this.state.productDetailsVisible}
                        selectedProduct={this.state.selectedProduct}
                        addProduct={this.props.addProduct}>
                    </ProductDetails>
                </Row>
            </div>
         );
    }
}
 
export default Menu ;