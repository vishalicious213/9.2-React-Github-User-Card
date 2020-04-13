import React from 'react';
import './Followers.css';
import GitHubCalendar from "react-github-calendar";

const Followers = (props) => {
    return (
        <section>
            <h2>GitHub Followers</h2>
            <div className='followerSection'>
                {props.followersData.map(follower => {
                    return (
                        <div key={follower.id} className='followerCard'>
                            <div className='followerImage'>
                                <img src={follower.avatar_url} alt={follower.id} />
                            </div>

                            <div className='followerName'>{follower.login}</div>

                            <a href={follower.html_url}>
                                <button>Visit GitHub Profile</button>
                            </a>

                            <div className='calendar'>
                                <GitHubCalendar
                                    username={follower.login}
                                    fontSize={12}
                                    blockSize={10}
                                    blockMargin={4}
                                    color="darkslateblue"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Followers;


