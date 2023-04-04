import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                        <Route path="/profile" render={() => <Profile/>}/>
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
