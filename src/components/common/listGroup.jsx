import React from 'react';
//this is the generic component for the Categories 
//convert to .tsx and fix errors

const ListGroup = ({ items, onItemSelect, textProperty, valueProperty, selectedItem}) => {
   //const { items, onItemSelect, textProperty, valueProperty, selectedItem} = props;

   return (
        <ul className="list-group list-group-horizontal clickable" style={{flexDirection:"row", marginTop: 20}} >
            {items.map(category(
                    <li className={ category === selectedItem ? "list-group-item active" : "list-group-item"} 
                     style={{marginRight: 20, marginBottom: 20}} 
                     key={category[valueProperty]} 
                     onClick={() => onItemSelect(category)}>
                        {category[textProperty]} 
                    </li>
            ))}
        </ul>
   );

//    <ul className="list-group list-group-horizontal">
//         <li className="list-group-item">Genere 1</li>
//         <li className="list-group-item">Dapibus ac facilisis in</li>
//         <li className="list-group-item">Morbi leo risus</li>
//     </ul>
}

//in this object you can set your object's properties and their default values
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;