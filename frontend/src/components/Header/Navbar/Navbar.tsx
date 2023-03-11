import React from 'react';
import Button from "./Button/Button";
import Subnavbar from "./Subnavbar/Subnavbar";

const Navbar = () => {
    return (
        <nav className='header-in-navbar'>
            <Button buttonStyle='red' href='/Login' value='Log In'/>
            <Button buttonStyle='black' value='Get App'/>
            <Subnavbar/>
        </nav>
    );
};

export default Navbar;