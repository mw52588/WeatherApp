import partlycloudyday from './images/02d.png'; 
import clearday from './images/01d.png'; 
import clearnight from './images/01n.png'; 
import rain from './images/09d.png'; 
import snow from './images/13d.png'; 
import mist from './images/mist.png';
import sleet from './images/13d.png'; 
import wind from './images/wind.png'; 
import fog from './images/mist.png'; 
import cloudy from './images/03d.png'; 
import partlycloudynight from './images/02n.png'; 
import tornado from './images/tornado.png'; 
import thunderstorm from './images/11d.png'; 
import def from './images/50d.png';

import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    summaryImage(image) {
        console.log(image);
        let imgsrc = ''
        switch(image) {
            case 'partly-cloudy-day':
                imgsrc = partlycloudyday;
                break;
            case 'clear-day':
                imgsrc = clearday;
                break;
            case 'clear-night':
                imgsrc = clearnight;
                break;
            case 'rain':
                imgsrc = rain;
                break;
            case 'snow': 
                imgsrc = snow;
                break;
            case 'sleet': 
                imgsrc = snow;
                break;
            case 'wind': 
                imgsrc = wind;
                break;
            case 'fog': 
                imgsrc = mist;
                break;
            case 'cloudy':
                imgsrc = cloudy;
                break; 
            case 'partly-cloudy-night':
                imgsrc = partlycloudynight;
                break;
            case 'tornado':
                imgsrc = tornado;
                break;
            case 'thunderstorm':
                imgsrc = thunderstorm;
                break;
            default: 
                imgsrc= def;
        }
        return imgsrc;
    }

    convertUnixTimeStamp(unixtimestamp) {
        let date = new Date(unixtimestamp *1000);
        let m = date.getMonth();
        switch (m) {
            case 0: 
                m = "Jan";
                break;
            case 1:
                m = "Feb";
                break;
            case 2: 
                m = "Mar";
                break;
            case 3: 
                m = "Apr";
                break;
            case 4:
                m = "May";
                break;
            case 5:
                m = "Jun";
                break;
            case 6:
                m = "Jul";
                break;
            case 7:
                m = "Aug";
                break;
            case 8:
                m = "Sep";
                break;
            case 9:
                m ="Oct";
                break;
            case 10:
                m = "Nov";
                break;
            case 11:
                m = "Dec";
                break;
            default:
                m ="";
        }


        let formattedTime = {
            year: date.getFullYear(),
            month: m,
            day: date.getDay(),
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        }

        return formattedTime; 
    }



        //Need to bind the methods action from onSubmit and onChange.
    render() {
        let item = this.props.item;
        return (
            <li>
               <div className="listImage"><img src={this.summaryImage(item.icon)} height='50px' width='50px' alt="weather_images"></img></div>
                <div className="listDate">{this.convertUnixTimeStamp(item.time).month} {this.convertUnixTimeStamp(item.time).day} {this.convertUnixTimeStamp(item.time).hour}:00</div>
                <div>{item.summary}</div>  
            </li>
        );
    }
}

export default ListItem