import React, { Component } from 'react';
import './App.css';

class Humidity extends Component {

  //Convert the visibility from meters to miles.
  ConvertMetersToMiles(meters) {
     return (meters / 1609.34).toFixed(2);
  }

  //Calculate wind direction based on degrees.
  WindDirection(dir) {
    let direction = "";
    if ((dir >= 347.5 && dir <= 360) || ( dir >= 0 && dir <= 12.5 )) {
      direction = "N";
    }
    else if (dir > 12.5 && dir < 77.5 ) {
      direction ="NE"
    }
    else if (dir >= 77.5 && dir < 102.5) {
      direction = "E";
    }
    else if (dir >= 102.5 && dir < 167.5) {
      direction = "SE";
    }
    else if (dir >= 167.5 && dir < 192.5) {
      direction = "S";
    }
    else if (dir >= 192.5 && dir < 257.5) {
      direction = "SW";
    }
    else if (dir >= 257.5 && dir < 282.5) {
      direction ="W";
    }
    else if (dir >= 282.5 && dir < 347.5) {
      direction = "NW";
    }
    return direction;
  }
  render() {
    let visibility = this.ConvertMetersToMiles(this.props.weatherInfo.weather.visibility);
    let direction = this.WindDirection(this.props.weatherInfo.weather.wind.deg);

    return (
        <div className="Humidity">
            <h3>Humidity: {this.props.weatherInfo.weather.main.humidity} %</h3>
            <h3>Pressure: {this.props.weatherInfo.weather.main.pressure} hPa</h3>
            <h3>Wind Speed: {direction} at {this.props.weatherInfo.weather.wind.speed} MPH</h3>
            <h3>Visibility: {visibility} miles</h3>
        </div>
    );
  };
}

export default Humidity;