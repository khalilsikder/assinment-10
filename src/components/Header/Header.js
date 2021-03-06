import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-menu'>
        <Link to='/home'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='./service'>Service</Link>
        <Link to='./checkout'>Checkout</Link>
        <Link to ='/blog'>Blog</Link>
        <Link to='/login'>Login</Link>
        </nav>
    );
};

export default Header;