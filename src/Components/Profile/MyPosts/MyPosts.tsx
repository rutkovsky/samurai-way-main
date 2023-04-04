import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    {id: 1, postMessage: 'Hi, how are you?', likesCount: 12},
    {id: 2, postMessage: 'Hello!', likesCount: 4},
    {id: 3, postMessage: 'It is my first post!', likesCount: 1}
]

let postsElements = postData.map( p => <Post message={p.postMessage} likesCount={p.likesCount}/>)

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>Write post</textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
