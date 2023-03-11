import React from 'react';
import { Link } from "react-router-dom";

const SubButton = (props: any) => {
    return (
        <li className="header-in-navbar-subnavbar-list-item-sublist-item-list-item">
            <Link to={props.href} className="header-in-navbar-subnavbar-list-item-sublist-item-list-item-link">
                {props.value}
            </Link>
        </li>
    );
};

export default SubButton;