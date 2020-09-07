import React from 'react';

function UserCard(props) {

    console.log("jo: UserCard.js: UserCard: render run", props);
    return (
        <>
            <div className="user-card">
                <img src="" alt="github user avatar"/>
                <h2>user.name</h2>
                <h4>Username: </h4>
                <div className="gen-info closed">
                    <p>Location: </p>
                    <p>Repositories: </p>
                    <p>Followers: </p>
                    <p>Following: </p>
                    
                </div>
            </div>
        
        </>
    );
};

export default UserCard;