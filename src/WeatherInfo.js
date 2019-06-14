import React, { Component } from 'react';
import './App.css';

class WeatherInfo extends Component {

  //Formula to Convert Kelvin to Fahrenheit.
  KelvinToFahrenheit (kelvin) {
      if (kelvin === undefined) {
        return 0;
      }
      let fahrenheit = kelvin * (9/5) - 459.67
      return Math.round(fahrenheit);
  }  
  
  // Grab the image symbol from the weatherInfo props.
  GetSymbol (symbol) {
    if (symbol === undefined) {
      return 0;
    }
    let weatherImg = "http://openweathermap.org/img/w/";
    weatherImg += symbol + ".png";
    return weatherImg;
  }
  
  render() {
    //console.log(this.props.weatherInfo.location.results[0].locations[0].latLng.lat);
    //console.log(this.props.weatherInfo.location.results[0].locations[0].latLng.lng);
    //console.log("Latitude: "+  this.props.location.results[0].locations.latLng.lat);
    //console.log("Longitude: "+  this.props.location.results[0].locations.latLng.lng)

    let current = this.props.darkskyWeather.currently.apparentTemperature;
    let symbol = this.GetSymbol(this.props.weatherInfo.weather.weather[0].icon); //Convert the image from json data of WeatherInfo prop.
    //Update the Component's weatherInfo.
    return (
      <div className="WeatherInfo">
        <img src={symbol} alt="weatherIcon" />
        <h2>{current} &deg;F</h2>
        <h3>{this.props.weather.name}, {this.props.weather.sys.country}</h3>
        <p>{this.props.darkskyWeather.currently.summary}</p>
        <p>Feels like: {this.props.darkskyWeather.currently.apparentTemperature} &deg;F</p>
        <p>Low: {this.props.darkskyWeather.daily.data[0].temperatureLow} &deg;F High: {this.props.darkskyWeather.daily.data[0].temperatureHigh} &deg;F</p>
        <p>Today: {this.props.darkskyWeather.hourly.summary}</p>
      </div>
    );
  }
};


export default WeatherInfo;