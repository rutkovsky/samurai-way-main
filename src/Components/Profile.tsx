import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div>
                long pic
                <img src="https://www.freepngimg.com/thumb/mountains/33431-5-mountains-free-download.png"/>
            </div>
            <div className="ava">
                ava + inf
                <div>
                    <img src="https://www.jumping.fitness/wp-content/uploads/2015/07/user.jpg"/>
                    Ivan Ivanov
                </div>
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    Old posts
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
