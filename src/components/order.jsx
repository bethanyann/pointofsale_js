import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


class Order extends Component {
    state = {  }
   
    handleDeleteProduct = (orderProduct) => {


    }

    handleIncrementProduct = (orderProduct) => {
        //maybe this should go in the increment counter to hold the number of items? 
        //but then how to calculate price if the quantity is in another component?
        //will have to redo the item.price bit and have a calculated field there that takes 
        //the base item price and multiplies it by quantity
    }

    render() { 
        console.log(JSON.stringify(this.props.order));
        return null;
        // const orderList = this.props.order;

        // if(orderList.length === 0) return <p> </p>
        // return ( 
        //     <div>
        //         <Row className="justify-content-center">
        //         <h4 className="text-center" style={{marginTop:"20px"}}>Order</h4>
        //         </Row>
        //         <Row>
        //             <Table>
        //                 <thead>
        //                     <th></th>
        //                 </thead>
        //                 <tbody>
        //                     {orderList.map(item =>
        //                        <tr key={item._id}>
        //                            <td>{item.name}</td>
        //                            <td onClick={this.handleIncrementProduct()}>+ or -</td>
        //                            <td>{item.price}</td>
        //                        </tr>                  
        //                     )}
        //                 </tbody>
        //             </Table>
        //         </Row> 
        //     </div>
        // );
    }
}
 
export default Order;

//this might need to be split into multiple components eventually but
//will contain a running list of each product added to the order 
//will contain quantity
//will have a section that will have the subtotal, tax, and total

//section of buttons at the bottom of this section with payment methods (cash card applepay whatever)

//will maybe add ability to split a check
//will maybe add ability to add order to a table
//will maybe add ability to send order (would generate a small text document of the order + ingredients for the kitchen)