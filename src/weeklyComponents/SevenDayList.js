import React, { Component } from 'react';
import '../App.css';
import SevenDayListItem from './SevenDayListItem';

class SevenDay extends Component {
    render() {
        console.log(this.props.darkskyWeather);
        const list = this.props.darkskyWeather.daily.data;
        const sevenDayListItems = list.map( (item,index) =>
            <SevenDayListItem darkskyWeather={this.props.darkskyWeather} item={item} key={index}>
            </SevenDayListItem>
        );

        return (
            <div className="SevenDayList">
                <ul>
                    {sevenDayListItems}
                </ul>
            </div>
        );
      }
}

export default SevenDay;