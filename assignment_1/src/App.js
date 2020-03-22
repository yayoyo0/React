import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Luis"
  }

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} changeUsername={this.changeUsernameHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username="Maximilian" />
      </div>
    );
  }
}

export default App;
