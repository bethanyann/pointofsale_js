import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
        const{data: product} = props;
        return ( 
        //    <Card>
        //         <Card.Header>

        //         </Card.Header>
        //         <Card.Body> 
                   
        //             <Card.Link className="stretched-link">
        //                 {product.name}
        //             </Card.Link>
        //         </Card.Body>
        //    </Card>
               
        //turn this into react components eventually
           
        <div className="card" style={{width: "18rem", transform:"rotate(0)"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card with stretched links</h5>
                    <p className="card-text bg-light">
                    This <a href="#" className="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
                    </p>
                </div>
        </div>
            
         );

}
 
export default Product;

//this will essentially be the little box item in the list of products.  
//will contain a small square layout with image of product, name, and price
//to be a repeated element in product list