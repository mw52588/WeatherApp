import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './SearchBar';
//Header Component will display the initial view along with the SearchBar functionality.  
// Still passes in onZipChange as a prop from App.js as it's a parent of SearchBar.
class Header extends Component {
 

    render() {
        return (
            <div className="App-header clearfix">
                 <img src={logo} className="App-logo" alt="weather" />
                  <h1>{this.props.title}</h1>
                  <SearchBar onZipChange={this.props.onZipChange}/>
            </div>
        );
    }
};

export default Header;