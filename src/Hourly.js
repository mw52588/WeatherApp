import React, { Component } from 'react';
import './App.css';
import Humidity from './Humidity';
import WeatherInfo from './WeatherInfo';
import HourList from './HourList';
// Hourly component displays the Current and Hourly 
// forecast for the displayed zip code.
class Hourly extends Component {

  render() {
    if (this.props.weather !== '') {
      return (
        <div className="Container">
          {/* Pass in the weatherInfo prop to both components */}
          <WeatherInfo weather={this.props.weather} darkskyWeather={this.props.darkskyWeather}/>
          <Humidity weather={this.props.weather} darkskyWeather={this.props.darkskyWeather} />
          <HourList className="dailyInfo" darkskyWeather={this.props.darkskyWeather}></HourList>
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