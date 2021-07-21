import React, { Component } from 'react';
import Category from './category';
//import ListGroup from './common/listGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class CategoryList extends Component {

    render() { 

        const {items : categories, selectedItem, onItemSelect} = this.props;
        console.log(categories);
        
        //might have to make the list group into a button if I want an image on it. leaving images off for now 
        return ( 
            <ListGroup horizontal style={{width: '90%', margin:'auto', paddingTop: 30}}>
                {categories.map((category) => (
                    <ListGroupItem style={{ paddingTop: '30px', paddingBottom: '30px', textAlign:'center' }}  
                        action 
                        key={category._id}
                        onClick={() => onItemSelect(category)}>
                            {category['name']}
                    </ListGroupItem>
                ))}
            </ListGroup>
                
                    // {categories.map( (category) => (
                    //         <li className={ category === selectedCategory? "list-group-item active" : "list-group-item"} 
                    //         style={{marginRight: 20, marginBottom: 20}} 
                    //         key={category['_id']} 
                    //         onClick={() => this.props.onItemSelect(category)}>

                    //          { category['name'] }
                    //         </li>
                    // ))}
            
         );
    }
}
 
export default CategoryList;

  //{/* add text and value properties to keep the list group item decoupled and reusable */}
   //              {/* <ListGroup 
  //                  items={this.state.categories} 
   //                 selectedItem={this.state.selectedCategory}
    //                onItemSelect={this.handleCategorySelect} 
   //              /> */}

//this will be a horizontal list that will scroll to the left and right with little arrow buttons, like a js slider thing
//need to figure out how to do js animations to allow for many categories to be added and scrolled through

//will contain just a list of Category components

//active={ category === selectedCategory ? true : false} style={{marginRight:20, marginBottom: 20}}