import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//this is going to be my 'slide out menu' from the tutorial, 'menu' will be the 'menu container' for it
//need css classes for this too
class ProductDetails extends Component {
    
    handleAddProductToOrder = (selectedProduct) => {
        this.visibility = "hide";
        this.props.addProduct(selectedProduct);
    }

    render() { 
        const {visible, selectedProduct} = this.props;
        if(!selectedProduct) return <p></p>

        let visibility = visible ? "show" : "hide";

        console.log("visible? " + visibility);
        console.log(selectedProduct);
        //function to add product to cart and also close the modal

        return (
            <div id="flyoutMenu"
            className={visibility}>
               
                <Row>
                
                    <Col style={{ paddingTop: 30}}>
                        <img scr={selectedProduct.image}></img>
                       <h4 style={{textAlign:"center"}}>{selectedProduct.name}</h4> 
                       <p>{selectedProduct.description}</p>

                    </Col>
                </Row>
                <Row>
                        {/* ingredient counters will have to be added here later */}
                       {/* will probably have to build out some sort of "orderItem" object to contain 
                       product as well as any additions or subtractions of ingredients */}
                </Row>
                <Row style={{textAlign:"center"}}>
                    <Col style={{position:"relative"}}>
                      <Button style={{position:"absolute", bottom:0}} onClick={() => this.handleAddProductToOrder(selectedProduct)}>Add to Order</Button>
                    </Col>
                </Row>
              
            </div>
         );
    }
}
 
export default ProductDetails;

//will be the slide-out menu that comes in from one side when a product is clicked on
//will have the product image, cost, as well as ingredient list and ability to add size, additional meal items or toppings/sauces or extras
//maybe just label that section extras

//need to figure out how to do slide-in js animations in react