import React from 'react';
import './Post.module.css';
import classes from './Post.module.css';


type PropsType = {
    message: string
    likesCount: number
}

const Post:React.FC<PropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img alt="Post Avatar" src="https://webmg.ru/wp-content/uploads/2022/05/i-203.jpeg"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
