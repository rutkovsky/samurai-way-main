import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.long}>
                <img alt="Long pic"
                     src="https://www.freepngimg.com/thumb/mountains/33431-5-mountains-free-download.png"/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img alt="User avatar" src="https://www.jumping.fitness/wp-content/uploads/2015/07/user.jpg"/>
                    Ivan Ivanov
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
