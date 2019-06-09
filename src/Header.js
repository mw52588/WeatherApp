import React, { Component } from 'react';
import logo from './weather.png';
import './App.css';
import SearchBar from './SearchBar';
import NavigationBar from './NavigationBar';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-header clearfix">
                 <img src={logo} className="App-logo" alt="weather" />
                  <h1>{this.props.title}</h1>
                  <SearchBar/>
            </div>
        );
    }
};

export default Header;