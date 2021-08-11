import React, { Component } from 'react';
import Order from '../components/order';
import Menu from '../components/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//refactor the bootstrap component import statements
class PointOfSale extends Component {
    state = { 
        orderList: [],
     }

     handleAddProduct = (newOrderProduct) => {
        console.log("new order product: " + JSON.stringify(newOrderProduct));

        let newOrderList = [...this.state.orderList, newOrderProduct];
        console.log("neworderlist: "+ newOrderList)
      
        console.log("product to add to the order:" + JSON.stringify(newOrderList));
        this.setState({orderList : newOrderList});
    }


    render() { 
        return ( 
              <Container fluid>
                    <Row style={{height: "600px"}}>
                        <Col sm={4} style={{backgroundColor:"chartreuse"}}>
                            <Order
                                order={this.state.orderList}
                            />
                        </Col>  
                        <Col sm={8} style={{ backgroundColor:"blueviolet", height:"800px"}}>
                            <Menu addProduct={this.handleAddProduct}/>
                        </Col>
                                       
                    </Row>  
               </Container>                    
        );
    }
}

export default PointOfSale;
//this will be the main container for all of the pieces of the application

//will have a <main className="container-fluid"> tag to keep responsive

//reciept/order will go on one side in a column 4 layout

//the other half will be composed of category list and product list

