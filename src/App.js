import React, { Component } from 'react';
import logo from './weather.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="weather" />
          <h1>Weather Application</h1>
          <div className="App-header-searchbar">
            <form onSubmit={this.handleSubmit}>
              <label>&#160;&#160;Zip Code
                <input type="text" maxlength="5" placeholder="Enter Zip Code..." value={this.state.value} onChange={this.handleChange}/>
              </label>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
