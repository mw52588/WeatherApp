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

import React, { Component } from 'react';
import '../App.css';

class HourListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggleInfo() {  
        this.setState(state => ({
            show: !state.show
        }));
    }

    summaryImage(image) {
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
        
        let h = new Array(23);
        let m = new Array(11);

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
       
        h[0] = "12:00 AM";
        h[1] = "1:00 AM";
        h[2] = "2:00 AM";
        h[3] = "3:00 AM";
        h[4] = "4:00 AM";
        h[5] = "5:00 AM";
        h[6] = "6:00 AM";
        h[7] = "7:00 AM";
        h[8] = "8:00 AM";
        h[9] = "9:00 AM";
        h[10] = "10:00 AM";
        h[11] = "11:00 AM";
        h[12] = "12:00 PM";
        h[13] = "01:00 PM";
        h[14] = "02:00 PM";
        h[15] = "03:00 PM";
        h[16] = "04:00 PM";
        h[17] = "05:00 PM";
        h[18] = "06:00 PM";
        h[19] = "07:00 PM";
        h[20] = "08:00 PM";
        h[21] = "09:00 PM";
        h[22] = "10:00 PM";
        h[23] = "11:00 PM";

        let month = m[date.getMonth()];
        let hour = h[date.getHours()];

        let formattedTime = {
            year: date.getFullYear(),
            month: month,
            day: date.getDate(),
            hour: hour,
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        }

        return formattedTime; 
    }

    renderElement() {
        if (this.state.show === true) {
            return (
                <div className="listItemShow">
                    <div>Precipitation:  {Math.round(this.props.item.precipProbability)}%</div>
                    <div>Dew Point:  {Math.round(this.props.item.dewPoint)}</div>
                    <div>UV Index: {this.props.item.uvIndex}</div>
                    <div>Humidity: {Math.round((this.props.item.humidity)*100)}%</div>
                </div>
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        let item = this.props.item;
        let date = this.convertUnixTimeStamp(item.time);
    
        return (
            <li onClick={this.toggleInfo}>
               <div className="listImage"><img src={this.summaryImage(item.icon)} height='50px' width='50px' alt="weather_images"></img></div>
                <div className="listDate">{date.month} {date.day} &nbsp;&nbsp;{date.hour}</div>
                <div>{item.summary}</div> 
                <div>{Math.round(this.props.item.temperature)} &deg;F</div>
                {this.renderElement()}
            </li>
        );
    }
}

export default HourListItem;