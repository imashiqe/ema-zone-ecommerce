import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Error404.css';
const Error404 = () => {
    return (
        <div className='error-container'>
           <Header></Header>
            <h2>404 <span className='t4'>|</span> Nothing here to see</h2>
        </div>
    );
};

export default Error404;