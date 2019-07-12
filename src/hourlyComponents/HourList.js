import React, { Component } from 'react';
import '../App.css';

import HourListItem from './HourListItem';

class HourList extends Component {
    constructor(props) {
        super(props);
        this.state = {show: true};

        //Need to bind the methods action from onSubmit and onChange.
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggleInfo() {  
        this.setState(state => ({
            show: !state.show
        }));
    }

    iterateOnlyOneDay(data) {
       let day = data.slice(0, 24);
       return day;
    }

    render() {
        const list = this.iterateOnlyOneDay(this.props.darkskyWeather.hourly.data);
        const hourListItems = list.map( (item,index) =>
            <HourListItem darkskyWeather={this.props.darkskyWeather} item={item} key={index}>
            </HourListItem>
        );

        return (
            <div className="HourList">
                <ul>
                    {hourListItems}
                </ul>
            </div>
        );
    }//End render function.
}
  
export default HourList;