import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    } 

    handleSearchSubmit(event) {
        event.preventDefault();
        console.log("handlesearchSubmit");
        console.log("Event: " + this.state.value);
        this.props.onZipChange(this.state.value);
    }

    render() {
        return (
            <div className="App-header-searchbar">
              <form onSubmit={this.handleSearchSubmit}>
                <label>&#160;&#160;Zip Code
                    <input type="text" maxLength="5" placeholder="Enter Zip Code..." value={this.state.value} onChange={this.handleSearchChange}/>
                </label>
                <input type="submit" value="Submit"/>
              </form>
            </div>
        );
    }
}

export default SearchBar;
