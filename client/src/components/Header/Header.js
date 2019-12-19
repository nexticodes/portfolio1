import React from 'react';

import logo from './../../assets/EBLogoinv.png';

import './Header.css';
import DrawerButton from '../DrawerButton/DrawerButton';

const Header = (props) => {



    return (
        <div className='header__container' style={{'position': 'fixed'}}>
            <div className='header__logo'>
                <a href='/'><img src={logo} alt='EB Logo white' height='75px' width='75px'/></a>
            </div>
            <div className='spacer'></div>
            <div className='header__toggle-button'>
                <DrawerButton/>
            </div>
        </div>
    )
}

export default Header;