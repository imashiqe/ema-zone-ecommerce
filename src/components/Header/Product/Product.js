import React from 'react';
import './Product.css'

const Product = (props) => {
     const {product,handleAddToCart} = props;
     const {name, img, seller, price, ratings} =product;

//      way 2
// const Product = ({product,handleAddToCart}) => {
//      const {name, img, seller, price, ratings} =product;
       
     
   
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:{price} $ </p>
            <p><small>Seller: {seller}</small></p>
            <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;