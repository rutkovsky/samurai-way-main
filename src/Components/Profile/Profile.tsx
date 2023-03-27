import React from 'react';
import './Profile.module.css';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.long}>
                long pic
                <img alt='Long pic' src="https://www.freepngimg.com/thumb/mountains/33431-5-mountains-free-download.png"/>
            </div>
            <div className={classes.ava}>
                ava + inf
                <div>
                    <img alt='User avatar' src="https://www.jumping.fitness/wp-content/uploads/2015/07/user.jpg"/>
                    Ivan Ivanov
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
