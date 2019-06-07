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
          <div className="App-header-searchbar">
            <form>
            <label for="search">Enter your City's Zip Code</label>
              <input placeholder="Enter Zip Code..." type="number"  />
              <button>Search</button>
            </form>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
