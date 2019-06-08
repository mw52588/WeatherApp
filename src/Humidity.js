import React, { Component } from 'react';
import './App.css';

class Humidity extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <div className="Humidity">
            <h1>Humidity</h1>
            <h1>Dew Poin:t</h1>
            <h2>UV Index:</h2>
            <h3>Visibility:</h3>
        </div>
    );
  };
}

export default Humidity;