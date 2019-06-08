import React, { Component } from 'react';
import './App.css';

class WeatherInfo extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <div className="WeatherInfo">
            <img src="" alt="weather"/>
            <h1>City</h1>
            <h2>Feels Like:</h2>
            <h3>Low: High:</h3>
        </div>
    );
  };
}

export default WeatherInfo;