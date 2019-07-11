import React, { Component } from 'react';
import '../App.css';

class AlertInfoList extends Component {
    convertUnixTimeStamp(unixtimestamp) {
        let date = new Date(unixtimestamp * 1000);
        
        let h = new Array(23);
        let m = new Array(11);
        let minutes = "";
        if (date.getMinutes() == 0) {
            minutes = "00";
        }
        else {
            minutes = date.getMinutes();
        }
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
        let month = m[date.getMonth()];
        
        h[0] = "12:" + minutes +" AM";
        h[1] = "1:" + minutes +  " AM";
        h[2] = "2:" + minutes + " AM";
        h[3] = "3:" + minutes + " AM";
        h[4] = "4:" + minutes + " AM";
        h[5] = "5:" + minutes + " AM";
        h[6] = "6:" + minutes + " AM";
        h[7] = "7:" + minutes + " AM";
        h[8] = "8:" + minutes + " AM";
        h[9] = "9:" + minutes + " AM";
        h[10] = "10:" + minutes + " AM";
        h[11] = "11:" + minutes + " AM";
        h[12] = "12:" + minutes + " PM";
        h[13] = "1:" + minutes + " PM";
        h[14] = "2:" + minutes + " PM";
        h[15] = "3:" + minutes + " PM";
        h[16] = "4:" + minutes + " PM";
        h[17] = "5:" + minutes + " PM";
        h[18] = "6:" + minutes + " PM";
        h[19] = "7:" + minutes + " PM";
        h[20] = "8:" + minutes + " PM";
        h[21] = "9:" + minutes + " PM";
        h[22] = "10:" + minutes + " PM";
        h[23] = "11:" + minutes + " PM";

        let hour = h[date.getHours()];

        let formattedTime = {
            year: date.getFullYear(),
            month: month,
            day: date.getDate(),
            hour: hour,
            minutes: minutes,
            seconds: date.getSeconds(),
        }

        return formattedTime; 
    }

    render() {
        let item = this.props.item;
        console.log("List item: " + item.time);
        let date = this.convertUnixTimeStamp(item.time);
        let expires = this.convertUnixTimeStamp(item.expires);
        return (
            <li>
                <div className="AlertInfo">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Begins at: {date.month} {date.day} at {date.hour}</p>
                    <p>Ends at:  {expires.month} {expires.day} at {expires.hour}</p>
                </div>
            </li>
        )
    }
}

export default AlertInfoList;