import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='my-container'>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/services'>services</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
        </nav>
    );
};

export default Header;