import React, { useState } from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
 
     const {cart,clearCart, children} = props;
 
     let total = 0;
     let shipping = 0;
     let quantity = 0;

  
     for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping ;
     }
    
     const tax =  parseFloat((total * 10/100).toFixed(2));
     const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Item {quantity} </p> 
            <p>Total Price : ${total} </p>
            <p>Shipping : ${shipping} </p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : $ {grandTotal.toFixed()} </h3>
            <button className='clearcart' onClick={clearCart}>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            {children}
        </div>
    );
};

export default Cart;