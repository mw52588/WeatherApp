import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Hourly from './Hourly';
import FiveDay from './FiveDay';
import Radar from './Radar';

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
                <li><NavLink to="/5day">5 Day</NavLink></li>
                <li><NavLink to="/radar">Radar</NavLink></li>
            </ul>
          </nav>
            <div>
              {/* Pass in the weatherInfo props to Hourly Component. */}
              <Route exact path="/" render={props => <Hourly weather={this.props.weather} darkskyWeather={this.props.darkskyWeather}{...props} />} />
              <Route path="/5day" component={FiveDay}/>
              <Route path="/Radar" component={Radar}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default NavigationBar;