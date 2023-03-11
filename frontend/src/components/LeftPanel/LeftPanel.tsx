import React from 'react';
import './LeftPanel.scss';
import Block from "./Block/Block";
import RegisterBlock from "./RegisterBlock/RegisterBlock";

const LeftPanel = () => {
    return (
        <aside className='leftpanel'>
            <div className="leftpanel-in">
                <div className="leftpanel-in-top">
                    <Block title='Feeds'
                           linkHref1={'/'}
                           linkValue1={'Home'}
                           linkHref2={'/'}
                           linkValue2={'Popular'}/>
                    <Block title='Recent'/>
                    <Block title='Topics'/>
                </div>
                <div className="leftpanel-in-bottom">
                    <RegisterBlock
                        value='Create an account to follow your favorite
                        communities and start taking part in conversations.'/>
                </div>
            </div>
        </aside>
    );
};

export default LeftPanel;