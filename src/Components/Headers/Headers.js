import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Headers = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop"> shop </a>
                <a href="/orders">orders </a>
                <a href="/inventory">inventory </a>
                <a href="/about">about </a>
                <a href="/signin">Login </a>
            </div>
        </nav>
    );
};

export default Headers;