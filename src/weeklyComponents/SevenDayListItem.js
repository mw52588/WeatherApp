import React, { Component } from 'react';
import '../App.css';

import partlycloudyday from '../images/02d.png'; 
import clearday from '../images/01d.png'; 
import clearnight from '../images/01n.png'; 
import rain from '../images/09d.png'; 
import snow from '../images/13d.png'; 
import mist from '../images/mist.png';
import sleet from '../images/13d.png'; 
import wind from '../images/wind.png'; 
import fog from '../images/mist.png'; 
import cloudy from '../images/03d.png'; 
import partlycloudynight from '../images/02n.png'; 
import tornado from '../images/tornado.png'; 
import thunderstorm from '../images/11d.png'; 
import def from '../images/50d.png';

class SevenDayListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggleInfo() {  
        console.log("TOggle");
        this.setState(state => ({
            show: !state.show
        }));
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
                imgsrc = sleet;
                break;
            case 'wind': 
                imgsrc = wind;
                break;
            case 'mist': 
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
            case 'fog':
                imgsrc = fog;
                break;
            default: 
                imgsrc= def;
        }
        return imgsrc;
    }

    convertUnixTimeStamp(unixtimestamp) {
        let date = new Date(unixtimestamp * 1000);
        let m = new Array(11);
        let dow = new Array(7);

        m[0] = "Jan";
        m[1] = "Feb";
        m[2] = "Mar";
        m[3] = "Apr";
        m[4] = "May";
        m[5] = "Jun";
        m[6] = "Jul";
        m[7] = "Aug";
        m[8] = "Sep";
        m[9] = "Oct";
        m[10] = "Nov";
        m[11] = "Dec";

        dow[0] = "Sunday";
        dow[1] = "Monday";
        dow[2] = "Tuesday";
        dow[3] = "Wednesay";
        dow[4] = "Thursday";
        dow[5] = "Friday";
        dow[6] = "Saturday";
  
        let month = m[date.getMonth()];
        let dayOfWeek = dow[date.getDay()];

        let formattedTime = {
            year: date.getFullYear(),
            month: month,
            day: date.getDate(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            dayOfWeek: dayOfWeek
        }

        return formattedTime; 
    }

    render() {
        let item = this.props.item;
        let date = this.convertUnixTimeStamp(item.time);
        return (
            <li onClick={this.toggleInfo}>
                <div className="listImage"><img src={this.summaryImage(item.icon)} height='50px' width='50px' alt="weather_images"></img></div>
                <div className="listDate">{date.dayOfWeek} {date.month} {date.day}</div>
                <div>{item.summary}</div>
                <div>{Math.round(item.temperatureMin)} &deg;F / {Math.round(item.temperatureMax)} &deg;F</div>
            </li>
        );
    }
}
export default SevenDayListItem;