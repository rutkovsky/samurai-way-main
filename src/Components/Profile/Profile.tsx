import React from 'react';
import './Profile.module.css';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Redux/state';

type ProfileProps = {
    profilePage: ProfilePageType
}

const Profile:React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    )
}

export default Profile;
