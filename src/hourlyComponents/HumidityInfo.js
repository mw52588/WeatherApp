import React, { Component } from 'react';
import '../App.css';

class HumidityInfo extends Component {

  //Calculate wind direction based on 360 degrees.
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
    let visibility = this.props.darkskyWeather.currently.visibility;  // Visibility in miles.
    let direction = this.WindDirection(this.props.darkskyWeather.currently.windBearing); //Calculate the wind bearing by degrees to determine direction.
    let precip = this.props.darkskyWeather.currently.precipProbability * 100; //Calculate percipitation out of 100%
    let humidity = this.props.darkskyWeather.currently.humidity * 100; //Calculate humidity out of 100%

    return (
        <div className="Humidity">
            <p>Preceiption: {Math.round(precip)}%</p>
            <p>Humidity: {Math.round(humidity)}%</p>
            <p>Dew Point: {Math.round(this.props.darkskyWeather.currently.dewPoint)}</p>
            <p>UV Index: {this.props.darkskyWeather.currently.uvIndex}</p>
            <p>Wind Speed: {direction} at {Math.round(this.props.darkskyWeather.currently.windSpeed)} MPH</p>
            <p>Visibility: {visibility} miles</p>
        </div>
    );
  };
}

export default HumidityInfo;