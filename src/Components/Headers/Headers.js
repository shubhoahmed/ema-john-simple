import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Headers = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home"> Home </a>
                <a href="/orders">orders </a>
                <a href="/inventory">inventory </a>
                <a href="/abous us">about </a>
            </div>
        </nav>
    );
};

export default Headers;