import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.item}>
            <div>
                My posts
                <textarea>Ввести пост</textarea>
                <button>Отправить</button>
            </div>
            <Post message='Hi, how are you?' likes='5'/>
            <Post message='It is my first post!' likes='10'/>
        </div>
    )
}

export default MyPosts;
