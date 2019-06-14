import React, { Component } from 'react';
import './App.css';
import Humidity from './Humidity';
import WeatherInfo from './WeatherInfo';

class HourList extends Component {
    
    iterateOnlyOneDay(data) {
       let d = data.slice(0, 24);
       return d;

    }

    convertUnixTimeStamp(unixtimestamp) {
        let date = new Date(unixtimestamp *1000);
        let formattedTime = date.toLocaleString();
        return formattedTime; 
    }


    render() {
        const list = this.iterateOnlyOneDay(this.props.darkskyWeather.hourly.data);
      

      
        
        return (
            <div>
                <ul>
                    {list.map( (item) => (
                        <li key={item.time}>
                            <div>Date: {this.convertUnixTimeStamp(item.time)}</div>
                            <div>{item.summary}</div>
                            <div>Precipitation: {item.precipProbability*100}%</div>
                            <div>Humidity: {item.humidity*100}%</div>
                            <div>Temperature: {item.temperature} &deg;F</div>
                        </li>
                    ))};  
                </ul>
            </div>
        );

    }
}

export default HourList;