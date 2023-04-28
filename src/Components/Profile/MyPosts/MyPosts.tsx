import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../Redux/state';


const MyPosts: React.FC<ProfilePageType> = (props) => {
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
                {props.postData.map((p) => {
                    return (
                        <Post id={p.id} postMessage={p.postMessage} likesCount={p.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts;
