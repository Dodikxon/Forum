import React from 'react';
import Links from "./Link/Link";

const Block = (props: any) => {
    if (props.linkValue2 && props.linkValue1) {
        return (
            <div className='leftpanel-in-block'>
                <h5 className='leftpanel-in-block-title'>
                    {props.title}
                </h5>
                <div className="leftpanel-in-block-items">
                    <Links href={props.linkHref1}
                           value={props.linkValue1}/>
                    <Links href={props.linkHref2}
                           value={props.linkValue2}/>
                </div>
            </div>
        );
    }
    if (props.linkValue1) {
        return (
            <div className='leftpanel-in-block'>
                <h5 className='leftpanel-in-block-title'>
                    {props.title}
                </h5>
                <div className="leftpanel-in-block-items">
                    <Links href={props.linkHref1}
                           value={props.linkValue1}/>
                </div>
            </div>
        );
    }
    return (
        <div className='leftpanel-in-block'>
            <h5 className='leftpanel-in-block-title'>
                {props.title}
            </h5>
        </div>
    );

};

export default Block;