import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//this is going to be my 'slide out menu' from the tutorial, 'menu' will be the 'menu container' for it
//need css classes for this too
class ProductDetails extends Component {
    

    render() { 
        const {visible, selectedProduct} = this.props;

        let visibility = visible ? "show" : "hide";

        console.log("visible? " + visibility);
        return (
            <div id="flyoutMenu"
            className={visibility}>
                <Row>
                    <Col sm={4} style={{backgroundColor:"chartreuse"}}>
                    
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <h2>selectedproductgoeshere</h2>
            </div>
         );
    }
}
 
export default ProductDetails;

//will be the slide-out menu that comes in from one side when a product is clicked on
//will have the product image, cost, as well as ingredient list and ability to add size, additional meal items or toppings/sauces or extras
//maybe just label that section extras

//need to figure out how to do slide-in js animations in react