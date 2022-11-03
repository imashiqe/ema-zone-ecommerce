import React from 'react';
import './Home.css';
import fashion from '../../images/shopping.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-container'>
            
         <div className="home-text">
            <h2>New Collection For Fall</h2>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>
            <Link to='/shop'><button className='home-btn'>SHOP Now</button></Link>
         </div>

         <div className="home-img">
            <img src={fashion} alt="" />
         </div>
        </div>
    );
};

export default Home;