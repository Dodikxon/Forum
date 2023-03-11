import React from 'react';
import Button from "./Button/Button";
import Subnavbar from "./Subnavbar/Subnavbar";

const Navbar = () => {
    return (
        <nav className='header-in-navbar'>
            <Button buttonStyle='black' value='Get App'/>
            <Button buttonStyle='red' value='Log In'/>
            <Subnavbar/>
        </nav>
    );
};

export default Navbar;