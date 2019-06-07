import React, { Component } from 'react';
import logo from './weather.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="weather" />
          <h1>Weather Application</h1>
          <form>
            <input className="App-header-searchbar" type="string" />
          </form>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
