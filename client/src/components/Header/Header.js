import React from 'react';

import logo from './../../assets/EBLogoWhite.png';

import './Header.css';
import DrawerButton from '../DrawerButton/DrawerButton';

const Header = () => {
    return (
        <div className='header__container'>
            <div className='header__logo'>
                <a href='/'><img src={logo} alt='EB Logo white' height='50px' width='50px'/></a>
            </div>
            <div className='spacer'></div>
            <div className='header__toggle-button'>
                <DrawerButton/>
            </div>
        </div>
    )
}

export default Header;