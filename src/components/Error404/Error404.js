import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';
const Error404 = () => {
    return (
        <div className='error-container'>
         <h2 className='text-main'>Error 404</h2>
            <Link To='/'>Return Back</Link>
            <p>Track Your ip address</p>
        </div>
    );
};

export default Error404;