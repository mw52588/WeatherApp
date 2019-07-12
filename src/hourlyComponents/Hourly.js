import React, { Component } from 'react';
import '../App.css';
import HumidityInfo from './HumidityInfo';
import WeatherInfo from './WeatherInfo';
import HourList from './HourList';
import AlertInfo from './AlertInfo';
// Hourly component displays the Current and Hourly 
// forecast for the displayed zip code.
class Hourly extends Component {

  render() {
    if (this.props.weather !== '') {
      return (
        <div className="Container">
          {/* Pass in the weatherInfo prop to both components */}
          <AlertInfo alertInfo={this.props.darkskyWeather}/>
          <WeatherInfo weather={this.props.weather} darkskyWeather={this.props.darkskyWeather}/>
          <HumidityInfo weather={this.props.weather} darkskyWeather={this.props.darkskyWeather} />
          <h1>Hourly Forecast</h1>
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