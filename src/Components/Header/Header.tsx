import React from 'react';
import './Header.module.css';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt='Логотип'
                src="https://w7.pngwing.com/pngs/926/338/png-transparent-logo-vk-vkontakte-social-media-and-logos-icon.png"/>
        </header>
    )
}

export default Header;
