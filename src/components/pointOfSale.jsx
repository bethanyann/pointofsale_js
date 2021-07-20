import React, { Component } from 'react';
import Order from '../components/order';
import Menu from '../components/menu';
class PointOfSale extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
                <main className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <Menu />
                        </div>
                        <div className="col-sm-4">
                            <Order />
                        </div>
                    </div>
                   
                </main>
            </div>
        );
    }
}

export default PointOfSale;
//this will be the main container for all of the pieces of the application

//will have a <main className="container-fluid"> tag to keep responsive

//reciept/order will go on one side in a column 4 layout

//the other half will be composed of category list and product list

