import React, { Component } from 'react';
import logo from './weather.png';
import './App.css';

import Header from './Header'; // Import a component from another file
import NavigationBar from './NavigationBar';
import Container from './Container';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavigationBar />
        <Container />
      </div>
    );
  }
}

export default App;
