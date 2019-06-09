import React, { Component } from 'react';
import './App.css';

class Humidity extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <div className="Humidity">
            <h1>Humidity: {this.props.weatherInfo.main.humidity}</h1>
            <h1>Pressure: {this.props.weatherInfo.main.pressure}</h1>
            <h2>Wind Speed: {this.props.weatherInfo.wind.speed}</h2>
            <h3>Visibility:{this.props.weatherInfo.visibility}</h3>
        </div>
    );
  };
}

export default Humidity;