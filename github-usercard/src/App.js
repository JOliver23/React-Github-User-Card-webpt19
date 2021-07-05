import React from 'react';
import UserCard from './components/UserCard';
import './index.css';

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
componentDidUpdate(prevProps, PrevState) {
  console.log("jo: App.js: App: CDU: Cdu render")
};

handleChange = e => {
  this.setState({
    userName: e.target.value
  });
};

handleUserNameChange = e => {
  fetch(`https://api.github.com/users/${this.state.userName}`)
    .then(response => {
      console.log("jo: App.js: App: handleUserNameChange", response);
      return response.json();
    })
    .then(user => {
      if (user.login === "error") {
        this.setState({error: "broken"});
      } else {
        this.setState({user: user})
      }
    })
    .catch(err => {
      console.log("jo: App.js: App: handleUserNameChange: fetch failed: ", err);
      this.setState({error: err});
    });

    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(response => response.json())
    .then(followers => {
      console.log("jo: App.js: App: CDM: CDM followers call ", followers)
      this.setState({followers: followers});
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
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <button onClick={this.handleUserNameChange}>Find Card</button>
        <UserCard 
          user={this.state.user}
          followers={this.state.followers}
          />
      </div>
    )
  }

}


export default App;
