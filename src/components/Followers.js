import React from 'react';

const Followers = (props) => {
    return (
        <div>
            <div>Followers Component</div>
            {props.followersData.map(follower => {
                return <div key={follower.id}>{follower.login}</div>
            })}
        </div>
    )
}

export default Followers;