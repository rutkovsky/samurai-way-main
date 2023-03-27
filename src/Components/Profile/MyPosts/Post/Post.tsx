import React from 'react';
import './Post.module.css';
import classes from './Post.module.css';
import {message} from 'antd';

const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img src="https://webmg.ru/wp-content/uploads/2022/05/i-203.jpeg"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
