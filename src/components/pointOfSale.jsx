import React, { Component } from 'react';
import Order from '../components/order';
import Menu from '../components/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//refactor the bootstrap component import statements
class PointOfSale extends Component {
    state = {  }
    render() { 
        return ( 
              <Container fluid>
                    <Row>
                        <Col sm={4} style={{backgroundColor:"chartreuse"}}>
                            <Order />
                            here's the order section
                        </Col>  
                        <Col sm={8} style={{ backgroundColor:"blueviolet"}}>
                            <Menu />
                            here's the menu section
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

