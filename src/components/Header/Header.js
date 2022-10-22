import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../contexts/UserContext';
import './Header.css'

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <nav className='header'>
                <Link to='/'> <img src={logo} alt="" /></Link>
             
              <div>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/inventory">Inventory</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <span>{user?.email}</span>
              </div>
            </nav>
        </div>
    );
};

export default Header;