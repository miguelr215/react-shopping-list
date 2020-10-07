import React from 'react';
import ShoppingItem from './ShoppingItem.js';

export default function ShoppingList(props){
    return(
        <ul>
            {props.items.map((item, index) => (
                <ShoppingItem key={index} item={item}/>
            ))}
        </ul>
    )
}

ShoppingList.defaultProps = {
    items: []
}
