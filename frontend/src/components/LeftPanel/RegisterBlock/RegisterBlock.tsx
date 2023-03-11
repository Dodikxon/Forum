import React from 'react';
import Button from "./Button/Button";
import {NameSite} from "../../../api/api";

const RegisterBlock = (props: any) => {
    return (
        <div className='leftpanel-in-bottom-registerblock'>
            <p className='leftpanel-in-bottom-registerblock-text'>
                {props.value}
            </p>
            <Button value={`Join ${NameSite}`}/>
        </div>
    );
};

export default RegisterBlock;