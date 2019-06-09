import React, { Component } from 'react';
import logo from './weather.png';
import './App.css';

import Header from './Header'; // Import a component from another file
import NavigationBar from './NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Hourly from './Hourly';
import FiveDay from './FiveDay';
import Radar from './Radar';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header title="Weather Application"/>
        <NavigationBar  />
      </div>
    );
  }
}

export default App;
