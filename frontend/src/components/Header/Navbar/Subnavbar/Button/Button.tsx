import React from 'react';
import {Link} from "react-router-dom";

const Button = (props: any) => {
    return (
        <li className="header-in-navbar-subnavbar-list-item-sublist-item">
            <Link to={props.href} className="header-in-navbar-subnavbar-list-item-sublist-item-link">
                {props.value}
            </Link>
        </li>
    );
};

export default Button;