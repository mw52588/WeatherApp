import React, { Component } from 'react';
import './App.css';
import sunny from './img/sunny.png';
import rain from './img/raining.png';
import thunderstorm from './img/thunderstorms.png';
import hot from './img/sunny.png';
import cold from './img/coldweather.png';
import snowing from './img/snowing.png';
import windy  from './img/windy.png';
import NavigationBar from './NavigationBar';

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
    let current = this.KelvinToFahrenheit(this.props.weatherInfo.main.temp);
    let symbol = this.GetSymbol(this.props.weatherInfo.weather[0].icon);
    return (
      <div className="WeatherInfo">
        <img src={symbol} alt="weatherIcon" />
        <h2>{current} &deg;F</h2>
        <h3>City: {this.props.weatherInfo.city}, {this.props.weatherInfo.sys.country}</h3>
        <h3>Description: </h3>
        <h3>{this.props.weatherInfo.weather[0].main}</h3>
      </div>
    );
  }
};


export default WeatherInfo;