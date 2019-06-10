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
  }

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
              <Route exact path="/" render={props => <Hourly weatherInfo={this.props.weatherInfo} {...props} />} />
              <Route path="/5day" component={FiveDay}/>
              <Route path="/Radar" component={Radar}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default NavigationBar;