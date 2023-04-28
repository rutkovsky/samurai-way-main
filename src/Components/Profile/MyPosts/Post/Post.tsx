import React from 'react';
import './Post.module.css';
import classes from './Post.module.css';
import {PostType} from '../../../../Redux/state';


const Post:React.FC<PostType> = (props) => {
    return (
        <div className={classes.item}>
            <img key={props.id} alt="Post Avatar" src="https://webmg.ru/wp-content/uploads/2022/05/i-203.jpeg"/>
            {props.postMessage}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
