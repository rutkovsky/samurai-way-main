import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

let dialogsData = [
    {id: 1, name: 'Ruslan'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Nina'},
    {id: 4, name: 'Yaroslav'},
    {id: 5, name: 'Balu'}
]

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'ok)'},
    {id: 4, message: 'Let\'s go!'},
    {id: 5, message: 'Waff'}
]

let dialogsElements = dialogsData
    .map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = messagesData
    .map(m => <Message m={m.message}/>)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
