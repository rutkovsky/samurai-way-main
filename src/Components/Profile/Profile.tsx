import React from 'react';
import './Profile.module.css';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../App';

type PropsType = {
    postData: PostType[]
}

const Profile:React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;
