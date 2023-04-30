import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import {DialogsPageType} from '../../Redux/state';

type DialogsProps = {
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsProps> = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogsData.map((d) => {
                    return (
                        <DialogItem name={d.name} id={d.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messagesData.map((m) => {
                    return (
                        <Message id={m.id} message={m.message}/>
                    )
                })}
            </div>
        </div>
    )
}
