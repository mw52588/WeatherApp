import React, { Component } from 'react';
import './App.css';

import ListItem from './ListItem';

class HourList extends Component {
    constructor(props) {
        super(props);
        this.state = {show: true};

        //Need to bind the methods action from onSubmit and onChange.
        this.toggleInfo = this.toggleInfo.bind(this);
       
    }

    toggleInfo() {  
        console.log("TOggle");
        this.setState(state => ({
            show: !state.show
        }));
    }

    iterateOnlyOneDay(data) {
       let d = data.slice(0, 24);
       return d;
    }

    render() {
        const list = this.iterateOnlyOneDay(this.props.darkskyWeather.hourly.data);
        const listItems = list.map( (item,index) =>
            <ListItem darkskyWeather={this.props.darkskyWeather} item={item} key={index}>
            </ListItem>
        );

        return (
            <div className="HourList">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
  
export default HourList;