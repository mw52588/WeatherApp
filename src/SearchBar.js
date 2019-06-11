import React, { Component } from 'react';
import './App.css';

// This component will allow a user to submit a zip code and update the state of value
// and on submit it will use the onZipChagne callback from App.js to update teh state of the zip code.
class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            value: ''
        };
        //Need to bind the methods action from onSubmit and onChange.
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }


   
    handleSearchChange(event) {
        event.preventDefault();  //enusre page doesn't reload.
        this.setState({value: event.target.value});  //set the state when a user types in the search bar.
    } 

    handleSearchSubmit(event) {
        event.preventDefault();
        if (!(/^\d+$/.test(this.state.value)) || this.state.value.length < 5) {
            this.props.handleErrorState("Please enter a valid zip code");
            return;
        }
        else {
            this.setState( {error: ""} );
            this.props.onZipChange(this.state.value);  //Use the callback function to update state of zip in App.js
        }
        
        
    }

    render() {
        return (
            <div className="App-header-searchbar">
                {/* onSubmit will update the state of zip on the App component through the callback of onZipChange*/}
               
              <form onSubmit={this.handleSearchSubmit}>  
                <label>&#160;&#160;Zip Code
                    <input type="text" maxLength="5" placeholder="Enter Zip Code..." value={this.state.value} onChange={this.handleSearchChange}  />
                </label>
                <input type="submit" value="Submit"/>
                <p><span>{this.props.error}</span><br></br><br></br></p>
              </form>
            
            </div>
        );
    }
}

export default SearchBar;
