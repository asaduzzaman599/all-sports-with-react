import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-part'>
            <a href="/home">The Api Sports Corner</a>
            <span>
                <a href="/home">Home</a>
                <a href="">Sports</a>
                <a href="/about">About Us</a>
            </span>
        </div>
    );
};

export default Header;