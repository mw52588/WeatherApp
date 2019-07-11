import React, { Component } from 'react';
import '../App.css';
import partlycloudyday from '../images/02d.png'; 
import clearday from '../images/01d.png'; 
import clearnight from '../images/01n.png'; 
import rain from '../images/09d.png'; 
import snow from '../images/13d.png'; 
import mist from '../images/mist.png';
import sleet from '../images/13d.png'; 
import wind from '../images/wind.png'; 
import fog from '../images/mist.png'; 
import cloudy from '../images/03d.png'; 
import partlycloudynight from '../images/02n.png'; 
import tornado from '../images/tornado.png'; 
import thunderstorm from '../images/11d.png'; 
import def from '../images/50d.png';

class WeatherInfo extends Component {
  
  // Grab the image symbol from the weatherInfo props.
  GetSymbol (symbol) {
    if (symbol === undefined) {
      return 0;
    }
    let imgsrc = ''
    switch(symbol) {
        case 'partly-cloudy-day':
            imgsrc = partlycloudyday;
            break;
        case 'clear-day':
            imgsrc = clearday;
            break;
        case 'clear-night':
            imgsrc = clearnight;
            break;
        case 'rain':
            imgsrc = rain;
            break;
        case 'snow': 
            imgsrc = snow;
            break;
        case 'mist': 
            imgsrc = mist;
            break;
        case 'sleet': 
            imgsrc = sleet;
            break;
        case 'wind': 
            imgsrc = wind;
            break;
        case 'fog': 
            imgsrc = fog;
            break;
        case 'cloudy':
            imgsrc = cloudy;
            break; 
        case 'partly-cloudy-night':
            imgsrc = partlycloudynight;
            break;
        case 'tornado':
            imgsrc = tornado;
            break;
        case 'thunderstorm':
            imgsrc = thunderstorm;
            break;
        default: 
            imgsrc = def;
    }
    return imgsrc;
  }
  
  render() {

    let current = this.props.darkskyWeather.currently.temperature;
    let symbol = this.GetSymbol(this.props.darkskyWeather.currently.icon); //Convert the image from json data of WeatherInfo prop.
    
    //Update the Component's weatherInfo.
    return (
      <div className="WeatherInfo">
        <img src={symbol} alt="weatherIcon" />
        <h2>{Math.round(current)} &deg;F</h2>
        <h3>{this.props.weather.name}, {this.props.weather.sys.country}</h3>
        <p>{this.props.darkskyWeather.currently.summary}</p>
        <p>Feels like: {Math.round(this.props.darkskyWeather.currently.apparentTemperature)} &deg;F</p>
        <p>Low: {Math.round(this.props.darkskyWeather.daily.data[0].temperatureLow)} &deg;F High: {Math.round(this.props.darkskyWeather.daily.data[0].temperatureHigh)} &deg;F</p>
        <p>Today: {this.props.darkskyWeather.hourly.summary}</p>
      </div>
    );
  }
};


export default WeatherInfo;