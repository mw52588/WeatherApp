import React, { Component } from 'react';
import './App.css';
import Header from './Header'; // Import a component from another file
import NavigationBar from './NavigationBar';
//wCRB7YTf5ZULKehULKMRXGUlxJOkYTHw
//The begining Parent Component.  Where state belongs.

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: '28211',
      weather: [],
      done: false,
      darkskyWeather: [],
      lat: '35.17',
      lng: '-80.79'
    }
    this.onZipChange = this.onZipChange.bind(this);
  }

  //Call back method for Search Bar method.  Fetches the JSON data from openweather map
  // and passes the data onto other child componenents
  onZipChange(zip) {
    console.log("On Zip Change:" + zip);
    console.log("Zip code is :" + this.state.zip);
    let url = "http://api.openweathermap.org/data/2.5/weather?zip="
    url += zip;
    url += "&apikey=dcd396a13d862c3866ee78206dad4f88"
    let lng = '';
    let lat = '';
    console.log(url);
    fetch(url)
      .then( (res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
         return res.json();
      }).then( (result) => {
        lng = result.coord.lon
        lat = result.coord.lat
        this.setState({ zip: zip, weather: result, lng: result.coord.lon, lat: result.coord.lat })
      }).catch( (error) => {
        console.log(error);
      });

      let darkskyURL = "https://api.darksky.net/forecast/";
      darkskyURL+="b552af31e2a5c7396e28b2befbfbf422/";
      darkskyURL+=(this.state.lat) + "," + (this.state.lng);
      var proxy = "https://cors-anywhere.herokuapp.com/";
    fetch(proxy + darkskyURL)
    .then( (res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
       return res.json();
    }).then( (result) => {
      this.setState({ darkskyWeather: result, done: true })
    }).catch( (error) => {
      console.log(error);
    });
    
  } 

  //On initial load call the onZipChagne call back function.
  componentDidMount() {
    this.onZipChange(this.state.zip);
  }
 
  //Render fucntion that waits until initial state is completed before displaying weather information.  
  // This ensures that weather data is properly displayed 
  render() {
    console.log(this.state.darkskyWeather);
    if(!this.state.done) {
      return (
        <div className="App">
        </div>
      );
    }
    else {
      return (
        <div className="App">

          {/* Pass in the onZipChange async method to child components.  
          Used in SearchBar component to update the state as a callback */}
          <Header onZipChange={this.onZipChange} title="Weather Application">
          </Header>
          <NavigationBar weatherInfo={this.state}/>

          {/* Pass in the weatherinfo as state to child componenets
           Used for Hourly, Hourly and Humidity components as props */}
         
        </div>
      );
    }
  }
}

export default App;
