import React from 'react';
import './Followers.css';
import GitHubCalendar from "react-github-calendar";
// import axios from 'axios';
// import Usercard from './Usercard';

const Followers = (props) => {
    return (
        <section>
            <h2>GitHub Followers</h2>
            <div className='followerSection'>
                {props.followersData.map(follower => {
                // {props.updateUser(follower.login)},
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

        // props.followersData.map(follower => {
        //     return (
        //         axios
        //             .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${follower.login}`)
        //             .then(results => {
        //                 return (<Usercard userData={results.data} />)
        //             })
        //             .catch(error => console.log('Error: ', error))
        //     )
        // })
    )
}

export default Followers;


