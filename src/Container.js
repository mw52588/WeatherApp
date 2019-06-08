import React, { Component } from 'react';
import './App.css';
import Humidity from './Humidity';
import WeatherInfo from './WeatherInfo' 
class Container extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Container">
           <WeatherInfo />
           <Humidity />

        </div>
    );
  }
}
export default Container;