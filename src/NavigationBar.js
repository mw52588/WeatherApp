import React, { Component } from 'react';
import './App.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="NavigationBar">
        <nav>
           <ul>
              <li><a className="active" href="/">Hourly</a></li>
              <li><a href="/5day">5 Day</a></li>
              <li><a href="/radar">Radar</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;