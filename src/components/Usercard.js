import React from 'react';

const Usercard = (props) => {
        // console.log(props)
        // console.log(props.userData.name)
        return (
            <div>
                <div>
                    <img src={props.userData.avatar_url} alt={props.userData.name} />
                </div>
                <div>

                    <div>{props.userData.name}</div>
                    <div>{props.userData.login}</div>
                    <div>Location: {props.userData.location}</div>
                    <div>Profile: {props.userData.html_url}</div>
                    <div>Followers: {props.userData.followers}</div>
                    <div>Following: {props.userData.following}</div>
                    <div>Bio: {props.userData.bio}</div>
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