import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
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
            <h6 className='product-name'>{name}</h6>
            <p>Price:{price} $ </p>
            <p><small>Seller: {seller}</small></p>
            <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;