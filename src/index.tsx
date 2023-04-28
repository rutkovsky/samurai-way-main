import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './Redux/state';

ReactDOM.render(
    <App postData={state.profilePage.postData} dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData}/>,
    document.getElementById('root')
);

