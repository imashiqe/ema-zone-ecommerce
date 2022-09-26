import React from 'react';
import './Cart.css'
const Cart = (props) => {
     const {cart} = props;

     let total = 0;
     for(const product of cart){
        total = total + product.price;
     }
 
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Item {props.cart.length} </p> 
            <p>Total Price : {total}</p>
            <p>Shipping : </p>
            <p>Tax :</p>
            <h3>Grand Total : </h3>
        </div>
    );
};

export default Cart;