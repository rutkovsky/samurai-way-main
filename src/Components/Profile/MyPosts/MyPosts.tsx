import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../App';


type PropsType = {
    postData: PostType[]
}

const MyPosts:React.FC<PropsType> = (props) => {

    let postsElements = props.postData.map(p => <Post message={p.postMessage} likesCount={p.likesCount}/>)

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
