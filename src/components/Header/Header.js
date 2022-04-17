import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Link to='/'>Home</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/service'>Service</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/blog'>Blog</Link>
        <Link to ='/about'>About</Link>
        <Link to='/login'>Login</Link>

        </div>
    );
};

export default Header;