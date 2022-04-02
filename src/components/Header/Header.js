import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='flex justify-between p-8'>
            <h2 className='text-2xl'>Plant Shop</h2>
            <div className='text-xl flex gap-6'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/order-review'>Order Review</NavLink>
            </div>
        </nav>
    );
};

export default Header;