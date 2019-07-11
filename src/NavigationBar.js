import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Hourly from './hourlyComponents/Hourly';
import SevenDay from './weeklyComponents/SevenDay';
import Radar from './radarComponents/Radar';

// This Component use react-router to display the 
// navigation tabs without reloading data.
class NavigationBar extends Component {

  render() {
    return (
      <HashRouter>
        <div className="NavigationBar">
          <nav>
            <ul>
                <li><NavLink exact to="/">Hourly</NavLink></li>
                <li><NavLink to="/Weekly">Weekly</NavLink></li>
                <li><NavLink to="/radar">Radar</NavLink></li>
            </ul>
          </nav>
            <div>
              {/* Pass in the weatherInfo props to Hourly Component. */}
              <Route exact path="/" render={props => <Hourly weather={this.props.weather} darkskyWeather={this.props.darkskyWeather}/>} />
              <Route path="/Weekly" render={(props) => <SevenDay weather={this.props.weather} darkskyWeather={this.props.darkskyWeather}/>} />
              <Route path="/Radar" component={Radar}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default NavigationBar;