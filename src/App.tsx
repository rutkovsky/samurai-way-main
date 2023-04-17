import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

export type PostType = {
    id: number,
    postMessage: string,
    likesCount: number
}

const App = () => {
    let postData = [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 12},
        {id: 2, postMessage: 'Hello!', likesCount: 4},
        {id: 3, postMessage: 'It is my first post!', likesCount: 1}
    ]
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                        <Route path="/profile" render={() => <Profile postData = {postData}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route exact path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
