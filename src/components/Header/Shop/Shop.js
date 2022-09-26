import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products,setProducts ] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
         <div className="products-container">
     <h3>This is for product : {products.length}</h3>
         </div>
         <div className="cart-container">
             <h3>Product Summery</h3>
         </div>
        </div>
    );
};

export default Shop;