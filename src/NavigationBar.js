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

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      main: [],
      wind: [],
      rain: [],
      sys: [],
      city: '',
      visibility: '',
      done: false
    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=28211&apikey=a2522a452fdf5813f7487b2e4b39f968')
            .then(res => res.json())
            .then( (result) => {
              this.setState({ rain: result.rain, sys: result.sys, wind: result.wind, weather: result.weather, main: result.main, city: result.name, visibility: result.visibility, done: true })
            })
  }
  render() {
    if(!this.state.done) {
      return (
          <div className="NavigationBar">
            <nav>
              <ul>
                  <li><NavLink exact to="/">Hourly</NavLink></li>
                  <li><NavLink to="/5day">5 Day</NavLink></li>
                  <li><NavLink to="/radar">Radar</NavLink></li>
              </ul>
            </nav>
          </div>
      );
    }
    else {
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
                <Route exact path="/" render={props => <Hourly weatherInfo={this.state} {...props} />} />
                <Route path="/5day" component={FiveDay}/>
                <Route path="/Radar" component={Radar}/>
              </div>
          </div>
        </HashRouter>
      );
    }
  }
}
export default NavigationBar;