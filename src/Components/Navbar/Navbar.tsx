import React from 'react';
import './Navbar.module.css';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}> Profile </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}> Messages </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}> News </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}> Settings </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
