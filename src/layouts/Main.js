import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Shop from '../components/Shop/Shop';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
         <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;