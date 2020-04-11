import React from 'react';
import './Usercard.css';

const Usercard = (props) => {
        // console.log(props)
        // console.log(props.userData.name)
        return (
            <div className='usercard'>
                <div className='imagebox'>
                    <img src={props.userData.avatar_url} alt={props.userData.name} />
                </div>

                <div className='details'>
                    <h1>{props.userData.name}</h1>
                    <div><i>{props.userData.login}</i></div>
                    <div><b>Location: </b>{props.userData.location}</div>
                    {/* <div><b>Profile: </b>{props.userData.html_url}</div> */}
                    <div><b>Followers: </b>{props.userData.followers}</div>
                    <div><b>Following: </b>{props.userData.following}</div>
                    <div><b>Bio: </b>{props.userData.bio}</div>
                    <a href={props.userData.html_url}>
                        <button>Visit GitHub Profile</button>
                    </a>
                </div>
            </div>
        )
}

export default Usercard;


// {
//   "id": 46301614,
//   "node_id": "MDQ6VXNlcjQ2MzAxNjE0",
//   "avatar_url": "https://avatars2.githubusercontent.com/u/46301614?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/vishalicious213",
//   "followers_url": "https://api.github.com/users/vishalicious213/followers",
//   "following_url": "https://api.github.com/users/vishalicious213/following{/other_user}",
//   "gists_url": "https://api.github.com/users/vishalicious213/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/vishalicious213/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/vishalicious213/subscriptions",
//   "organizations_url": "https://api.github.com/users/vishalicious213/orgs",
//   "repos_url": "https://api.github.com/users/vishalicious213/repos",
//   "events_url": "https://api.github.com/users/vishalicious213/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/vishalicious213/received_events",
//   "company": null,
//   "blog": "https://neophyte.home.blog/",
//   "email": null,
// }