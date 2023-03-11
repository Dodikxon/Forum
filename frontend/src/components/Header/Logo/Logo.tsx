import React from 'react';
import {NameSite} from '../../../api/api'
const Logo = () => {
    return (
        <div className='header-in-logo'>
            <img src={require('./logo.png')}
                 alt={NameSite}
                 className="header-in-logo-img"/>
            <h1 className="header-in-logo-title">{NameSite}</h1>
        </div>
    );
};

export default Logo;