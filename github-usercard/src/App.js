import React from 'react';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    error: "",
    userName: "JOliver23"
  }
  componentDidMount() {
    console.log("jo: App.js: App: CDM: CDM run")
  fetch("https://api.github.com/users/JOliver23")
    .then(response => response.json())
    .then(user => {
      console.log("jo: App.js: App: CDM: response github api", user);
      if (user.type !== "User") {
        this.setState({error: "Error in CDM fetch of given userName"})
      } else {
        this.setState({user: user})
      }
    })
    .catch(err => {
      console.error("jo: App.js: App: CDM: fetch failed")
    });
    fetch("https://api.github.com/users/JOliver23/followers")
      .then(response => response.json())
      .then(followers => {
        console.log("jo: App.js: App: CDM: CDM followers call ", followers)
      })
      .catch(err => {
        console.error("jo: App.js: App: CDM: follower fetch failed")
      });
};
  render() {
    console.log("jo: App.js: App: render run");
    return(
      <div className="App">
        <h1>GitHub User Card APP!!!</h1>
        <input 
          type="text"
          placeholder="Enter your GitHub login name"
        />
        <button>Find Card</button>
        <UserCard/>
      </div>
    )
  }

}


export default App;
