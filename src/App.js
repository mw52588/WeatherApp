import React, { Component } from 'react';
import './App.css';
import Header from './Header'; // Import a component from another file
import NavigationBar from './NavigationBar';
//wCRB7YTf5ZULKehULKMRXGUlxJOkYTHw
//The begining Parent Component.  Where state belongs.
/*
async function fetchCoords(zip) {
  const URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&apikey=dcd396a13d862c3866ee78206dad4f88`;
  console.log(URL);
  try {
    const fetchResult = this.fetch(URL);
    const response = await fetchResult;
    const result = await response.json();
    this.setState( { zip: zip, done: true});
    //this.setState({ zip: zip, weather: result})
    console.log(result.coord.lon);
  }catch (error) {
    throw Error(error);
  }
}

async function fetchWeather(lat, lon) {
  const URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b552af31e2a5c7396e28b2befbfbf422/${lat},${lon}`;
  console.log(URL);
  try {
    const fetchResult = this.fetch(URL);
    const response = await fetchResult;
    const result = await response.json();
    //this.setState({ weather: result, done: true })
    console.log(result);
  }catch (error) {
    throw Error(error);
  }
}
*/
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: '28211',
      weather: [],
      done: false,
      darkskyWeather: [],
      lat: '',
      lon: '',
      error: ''
    }

    this.onZipChange = this.onZipChange.bind(this);
    this.handleErrorState = this.handleErrorState.bind(this);

  }

  async fetchCoords(zip) {
    const URL =`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&apikey=dcd396a13d862c3866ee78206dad4f88`; // Will return a 404
    try {
      const fetchResult = fetch(URL)
      const response = await fetchResult;
      const result = await response.json();
      console.log(result);
      if(result.cod !== 200) {
        let error = "Error: " + result.cod + " " + result.message;
        
        console.log(error);
        throw Error(error);
      }
      return result;
    } catch(error){
      
      throw Error(error);
    }
  }
  
  async fetchWeather(lat, lon) {
    const URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b552af31e2a5c7396e28b2befbfbf422/${lat},${lon}`;
    console.log(URL);
    try {
      const fetchResult = fetch(URL);
      const response = await fetchResult;
    
      const result = await response.json();
     
      return result;
      /*}
      else {
        this.handleErrorState(response.statusText);
        console.log("Error thrown: " + response.statusText);
        throw new Error(response.statusText);
      }
   */
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
        this.setState({ done: true, darkskyWeather: result })
      })
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
          <Header handleErrorState={this.handleErrorState} onZipChange={this.onZipChange} title="Weather Application">
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
