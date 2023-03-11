import React, {useState} from 'react';
import {Link} from "react-router-dom";
import SubButton from "./SubButton/SubButton";

const Button = (props: any) => {
    const [open, setOpen] = useState('')
    function openSubmen (open: string){
        if(open === 'open'){
            setOpen('')
        }
        else{
            setOpen('open')
        }
    }
    if (props.subButtonValue5){
        return (
            <li className={`header-in-navbar-subnavbar-list-item-sublist-item header-in-navbar-subnavbar-list-item-sublist-item-${open}`}>
                <a onClick={e => openSubmen(open)} className="header-in-navbar-subnavbar-list-item-sublist-item-link">
                    {props.value}
                </a>
                <ul className={`header-in-navbar-subnavbar-list-item-sublist-item-list header-in-navbar-subnavbar-list-item-sublist-item-list-${open}`}>
                    <SubButton href={props.subButtonHref1} value={props.subButtonValue1}/>
                    <SubButton href={props.subButtonHref2} value={props.subButtonValue2}/>
                    <SubButton href={props.subButtonHref3} value={props.subButtonValue3}/>
                    <SubButton href={props.subButtonHref4} value={props.subButtonValue4}/>
                    <SubButton href={props.subButtonHref5} value={props.subButtonValue5}/>
                    <SubButton href={props.subButtonHref6} value={props.subButtonValue6}/>
                    <SubButton href={props.subButtonHref7} value={props.subButtonValue7}/>
                    <SubButton href={props.subButtonHref8} value={props.subButtonValue8}/>
                    <SubButton href={props.subButtonHref9} value={props.subButtonValue9}/>
                </ul>
            </li>
        );
    }
    if (props.subButtonValue1){
        return (
            <li className={`header-in-navbar-subnavbar-list-item-sublist-item header-in-navbar-subnavbar-list-item-sublist-item-${open}`}>
                <a onClick={e => openSubmen(open)} className="header-in-navbar-subnavbar-list-item-sublist-item-link">
                    {props.value}
                </a>
                <ul className={`header-in-navbar-subnavbar-list-item-sublist-item-list header-in-navbar-subnavbar-list-item-sublist-item-list-${open}`}>
                    <SubButton href={props.subButtonHref1} value={props.subButtonValue1}/>
                    <SubButton href={props.subButtonHref2} value={props.subButtonValue2}/>
                    <SubButton href={props.subButtonHref3} value={props.subButtonValue3}/>
                    <SubButton href={props.subButtonHref4} value={props.subButtonValue4}/>
                </ul>
            </li>
        );
    }else{
        return (
            <li className="header-in-navbar-subnavbar-list-item-sublist-item">
                <Link to={props.href} className="header-in-navbar-subnavbar-list-item-sublist-item-link">
                    {props.value}
                </Link>
            </li>
        );
    }

};

export default Button;