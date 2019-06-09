import React, { Component } from 'react';
import './App.css';
import Humidity from './Humidity';
import WeatherInfo from './WeatherInfo';

class Hourly extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div className="Container">
           <WeatherInfo weatherInfo={this.props.weatherInfo}/>
           <Humidity weatherInfo={this.props.weatherInfo} />
        </div>
    );
  }
}
export default Hourly;