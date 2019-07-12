import React, { Component } from 'react';
import './App.css';
import Header from './headerComponents/Header'; // Import a component from another file
import NavigationBar from './NavigationBar';

//wCRB7YTf5ZULKehULKMRXGUlxJOkYTHw
//The begining Parent Component.  Where state belongs.
console.log();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: '28211',
      weather: [],
      done: false,
      darkskyWeather: [],
      alertInfo: [],
      lat: '',
      lon: '',
      error: ''
    }

    this.onZipChange = this.onZipChange.bind(this);
    this.handleErrorState = this.handleErrorState.bind(this);

  }

  async fetchCoords(zip) {
    const URL =`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&apikey=${process.env.REACT_APP_WEATHERAPI}`; // Will return a 404
    try {
      
      const response = await fetch(URL)
      const result = await response.json();
      console.log(result);
      if (result.cod === 200) {
        return result;
      }
    } catch(error){
        throw Error(error);
    }
  }
  
  async fetchWeather(lat, lon) {
      const URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKYAPI}/${lat},${lon}`;
    try {
      const response = await fetch(URL)
      const result = await response.json();
      console.log(result);
      return result;
    }catch (error) {
      throw new Error(error);
    }
  }
  
  handleErrorState(error) {

    this.setState( {error: error})
  }
  //Call back method for Search Bar method.  Fetches the JSON data from openweather map
  // and passes the data onto other child componenents
  onZipChange(zip) {
    this.fetchCoords(zip)
    .then( (result) => {
        this.setState( { zip: zip, weather: result, lat: result.coord.lat, lon: result.coord.lon });
        this.fetchWeather(this.state.lat, this.state.lon)
        .then( (result) => {
            console.log(result);
            this.setState({ done: true, darkskyWeather: result })
        })
        .catch(err => console.log(err))
   
    })

    .catch( (err) => {
        console.log(err);
        this.handleErrorState("Please enter a valid zip code");
        return;
    });
  }

  //On initial load call the onZipChagne call back function.
  componentDidMount() {
    this.onZipChange(this.state.zip);
  }

  //Render fucntion that waits until initial state is completed before displaying weather information.  
  // This ensures that weather data is properly displayed 
  render() {
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
          <Header error={this.state.error} handleErrorState={this.handleErrorState} onZipChange={this.onZipChange} title="Weather Application"/>
          {/* Pass in the weatherinfo as state to child componenets
           Used for Hourly, Hourly and Humidity components as props */}
          <NavigationBar weather={this.state.weather} darkskyWeather={this.state.darkskyWeather}/>
        </div>
      );
    }
  }
}

export default App;