import React from 'react';
import {Link} from "react-router-dom";

const Button = (props: any) => {
    return (
        <Link className={`header-in-navbar-button header-in-navbar-button-${props.buttonStyle}`}
              to={props.href}>
            {props.value}
        </Link>
    );
};

export default Button;