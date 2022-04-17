import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-links'>
        <Link to='/'>Home</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/service'>Service</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/blog'>Blog</Link>
        <Link to='/login'>Login</Link>

        </div>
    );
};

export default Header;