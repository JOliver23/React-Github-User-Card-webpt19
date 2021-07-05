import React from 'react';

function UserCard(props) {

    console.log("jo: UserCard.js: UserCard: render run", props);
    return (
        <>
            <div className="user-card">
                <img src={props.user.avatar_url} alt="github user avatar"/>
                <div className="name-tag">
                    <h2>{props.user.name}</h2>
                    <h4>Username: {props.user.login}</h4>
                </div>
                <div className="gen-info closed">
                    <p>Location: {props.user.location}</p>
                    <p>Repositories: {props.user.public_repos}</p>
                    <p>Followers: {props.user.followers}</p>
                    <p>Following: {props.user.following}</p>
                    <a href={props.user.html_url}>GitHub</a>
                </div>
            </div>
        
            <div className="follower-card">
                {props.followers.map(follower => (
                    <div key={follower.id} className="follower" >
                        <img src={follower.avatar_url} alt="GitHub user avatar" />
                        <h2>{follower.name}</h2>
                        <h4>Username: {follower.login}</h4>
                    </div>
                ))}
            </div>
        </>
    );
};
export default UserCard;