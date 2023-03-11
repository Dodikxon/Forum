import React from 'react';
import Logo from "./Logo/Logo";
import './Header.scss';
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-in">
                    <Logo/>
                    <Search/>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
};

export default Header;