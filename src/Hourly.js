import React, { Component } from 'react';
import './App.css';
import Humidity from './Humidity';
import WeatherInfo from './WeatherInfo';
// Hourly component displays the Current and Hourly 
// forecast for the displayed zip code.
class Hourly extends Component {

  render() {
    if (this.props.weatherInfo.weather !== '') {
      return (
        <div className="Container">
          {/* Pass in the weatherInfo prop to both components */}
          <WeatherInfo weatherInfo={this.props.weatherInfo}/>
          <Humidity weatherInfo={this.props.weatherInfo} />
        </div>
      );
    }
    else {
      return (
        <div className="Container">

        </div>
      );
    }
  }
}
export default Hourly;