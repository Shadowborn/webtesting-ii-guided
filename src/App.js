import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerList from './players/PlayerList';

class App extends Component {
  state = {
    greeting: "Hello World",
    players: [
      {
        id: 1,
        name: 'James'
      },
      {
        id:2,
        name: 'Blahb',
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <h2>{this.state.greeting}</h2>
        <button onClick={this.greetTeam}>Greet</button>
        <PlayerList players={this.state.players}></PlayerList>
      </div>
    );
  }

  greetTeam = () => {
    this.setState({ greeting: "Hello Developers" })
  };
}

export default App;
