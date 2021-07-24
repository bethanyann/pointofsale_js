import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
        const{data: product, onItemSelect} = props;
        return ( 
           <Card style={{width: "15rem", height:"", transform:"rotate(0)", margin:"5px"}}>
               <Card.Img variant="top" src={product.image} className="justify-content-center" />
                <Card.Body> 
                    <Card.Title>{product.name}</Card.Title>
                    <a href="#" onClick={() => onItemSelect(product)} className="stretched-link">
                        {product.description}
                    </a>
                </Card.Body>
           </Card>
               
        //turn this into react components eventually
           
        // <div className="card" style={{width: "15rem", transform:"rotate(0)"}}>
        //     <img src="..." className="card-img-top" alt="..."/>
        //         <div className="card-body">
        //             <h5 className="card-title">{product.name}</h5>
        //             <p className="card-text bg-light">
        //             This <a href="#" className="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
        //             </p>
        //         </div>
        // </div>
            
         );

}
 
export default Product;

//this will essentially be the little box item in the list of products.  
//will contain a small square layout with image of product, name, and price
//to be a repeated element in product list