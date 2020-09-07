import React from 'react';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    error: "",
    userName: "JOliver23"
  }
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
