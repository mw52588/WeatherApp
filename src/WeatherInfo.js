import React, { Component } from 'react';
import './App.css';

class WeatherInfo extends Component {

  constructor(props) {
    super(props);
  }

  KelvinToFahrenheit (kelvin) {
      let fahrenheit = kelvin * (9/5) - 459.67
      return Math.round(fahrenheit);
  }  
  
  GetSymbol (symbol) {
    let weatherImg = "http://openweathermap.org/img/w/";
    weatherImg += symbol + ".png";
    console.log(weatherImg);
    return weatherImg;
  }
 //http://api.openweathermap.org/data/2.5/weather?zip=28211&apikey=a2522a452fdf5813f7487b2e4b39f968

  render() {
    console.log(this.props.weatherInfo);
    let current = this.KelvinToFahrenheit(this.props.weatherInfo.weather.main.temp);
    let symbol = this.GetSymbol(this.props.weatherInfo.weather.weather[0].icon);
    
    return (
      <div className="WeatherInfo">
        <img src={symbol} alt="weatherIcon" />
        <h2>{current} &deg;F</h2>
        <h3>City: {this.props.weatherInfo.weather.name}, {this.props.weatherInfo.weather.sys.country}</h3>
        <h3>Description: </h3>
        <h3>{this.props.weatherInfo.weather.weather[0].main}</h3>
      </div>
    );
  }
};


export default WeatherInfo;