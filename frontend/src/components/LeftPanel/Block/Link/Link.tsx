import React from 'react';
import {Link} from "react-router-dom";

const Links = (props: any) => {
    return (
        <Link to={props.href} className='leftpanel-in-block-items-link'>
            {props.value}
        </Link>
    );
};

export default Links;