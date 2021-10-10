import React, { Component } from 'react';
import Login from "./login";
import Logout from "./logout";
import Profile from "./profile";

class Name extends Component {
  render () {
    const name = this.props.name;

    return (
      <span style={{color: 'red'}}>{name}</span>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  render() {
    const name = this.state.name;

    return (
      <div align="center">
        <h1>Cruise0</h1>
        <h2>This is Cruise0 App for demo:  <Name name={name} /></h2>
        <input
          type="text"
          value={name}
          onChange={ e  => {
            this.setState({
              name: e.target.value
            })
          }}
        />
        <Login />
        <Logout />
        <Profile />
      </div>
    );
  }
}
