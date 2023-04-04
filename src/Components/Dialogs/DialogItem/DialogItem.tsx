import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props: any) => {
    return (
        <div className={classes.dialogItems}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
