import React, { Component } from 'react';
import '../App.css';
import SevenDayList from './SevenDayList';

class SevenDay extends Component {


  render() {
    
    return (
        <div className="Container">
          <h1>Seven Day Forecast</h1>
          <p>{this.props.darkskyWeather.daily.summary}</p>
          <SevenDayList darkskyWeather={this.props.darkskyWeather}></SevenDayList>
        </div>
    );
  }
}
export default SevenDay;