import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../Redux/state';

const DialogItem: React.FC<DialogsType> = (props) => {
    return (
        <div className={classes.dialogItems}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
