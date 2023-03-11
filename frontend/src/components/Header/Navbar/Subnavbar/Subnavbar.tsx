import React, {useState} from 'react';
import Button from "./Button/Button";
import {NameSite} from "../../../../api/api";

const Subnavbar = () => {
    const [open, setOpen] = useState('')
    function openSubmen (open: string){
        if(open === 'open'){
            setOpen('')
        }
        else{
            setOpen('open')
        }
    }
    return (
        <div className='header-in-navbar-subnavbar'>
            <ul className="header-in-navbar-subnavbar-list">
                <li className="header-in-navbar-subnavbar-list-item">
                    <a onClick={e => openSubmen(open)} className="header-in-navbar-subnavbar-list-item-link">
                        menu
                    </a>
                    <ul className={`header-in-navbar-subnavbar-list-item-sublist header-in-navbar-subnavbar-list-item-sublist-${open}`}>
                        <Button href={'/'} value={'Help Center'}/>
                        <Button value={'More'}/>
                        <Button value={'Terms & Policies'}/>
                        <Button value={`Advertise on ${NameSite}`}/>
                        <Button value={'Log In / Sing Up'}/>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Subnavbar;