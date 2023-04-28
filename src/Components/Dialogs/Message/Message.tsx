import React from 'react';
import classes from './Message.module.css';
import {MessagesType} from '../../../Redux/state';

const Message: React.FC<MessagesType> = (props) => {
    return (
        <div key={props.id} className={classes.message}>{props.message}</div>
    )
}

export default Message;
