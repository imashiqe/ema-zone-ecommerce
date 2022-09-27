import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts ] = useState([]);

    const [cart,setCart] = useState([]);
    useEffect( () => {
        console.log('Products load before fetch')
        fetch('products.json')
        .then(res=> res.json())
        .then(data => {
            setProducts(data);
            console.log('product loaded')
        })
    },[]);
   
    useEffect(()=>{
        console.log('local storage first line')
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in  storedCart){

            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
    setCart(savedCart);

    },[products])


    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        // cart.push(product);
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
           selectedProduct.quantity = 1;
           newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        newCart =  [...cart,selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id)
     }


    return (
        <div className='shop-container'>
         <div className="products-container">
         {
            products.map(product => <Product 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
         }
         </div>
         <div className="cart-container">
              <Cart cart={cart}></Cart>
         </div>
        </div>
    );
};

export default Shop;