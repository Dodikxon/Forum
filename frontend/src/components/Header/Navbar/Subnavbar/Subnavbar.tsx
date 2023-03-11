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
                        <Button value={'More'}
                                subButtonHref1={''}
                                subButtonValue1={`${NameSite} iOS`}
                                subButtonHref2={''}
                                subButtonValue2={`${NameSite} Android`}
                                subButtonHref3={''}
                                subButtonValue3={`Re${NameSite}`}
                                subButtonHref4={''}
                                subButtonValue4={`Best Communities`}
                                subButtonHref5={''}
                                subButtonValue5={`Communities`}
                                subButtonHref6={''}
                                subButtonValue6={`About ${NameSite}`}
                                subButtonHref7={''}
                                subButtonValue7={`Blog`}
                                subButtonHref8={''}
                                subButtonValue8={`Careers`}
                                subButtonHref9={''}
                                subButtonValue9={`Press`}/>
                        <Button value={'Terms & Policies'}
                                subButtonHref1={''}
                                subButtonValue1={`User Agreement`}
                                subButtonHref2={''}
                                subButtonValue2={`Privacy Policy`}
                                subButtonHref3={''}
                                subButtonValue3={`Content Policy`}
                                subButtonHref4={''}
                                subButtonValue4={`Moderator Code of Conduct`}/>
                        <Button value={`Advertise on ${NameSite}`}/>
                        <Button value={'Log In / Sing Up'}/>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Subnavbar;