import React, { Component } from 'react';

import './App.css';

import Header from './Header'; // Import a component from another file
import NavigationBar from './NavigationBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: '28211',
      weather: [],
      done: false
    }
    this.onZipChange = this.onZipChange.bind(this);
  }

  onZipChange(zip) {
    console.log("On Zip Change:" + zip);
    console.log("Zip code is :" + this.state.zip);
    let url = "http://api.openweathermap.org/data/2.5/weather?zip="
    url += zip;
    url += "&apikey=dcd396a13d862c3866ee78206dad4f88"
    console.log(url);
    fetch(url)
      .then( (res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
         return res.json();
      }).then( (result) => {
        console.log("200");
        this.setState({ zip: zip, weather: result, done: true })
      }).catch( (error) => {
        console.log(error);
      });
  } 

  componentDidMount() {
    console.log("componentDidMount");
    this.onZipChange(this.state.zip);
  }

  render() {
    console.log(this.state.zip);
    if(!this.state.done) {
      return (
        <div className="App">
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <Header onZipChange={this.onZipChange} title="Weather Application"/>
          <NavigationBar weatherInfo={this.state}/>
        </div>
      );
    }
  }
}

export default App;
