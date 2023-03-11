import React from 'react';

const Button = (props: any) => {
    return (
        <a className='leftpanel-in-bottom-registerblock-button'>
            {props.value}
        </a>
    );
};

export default Button;