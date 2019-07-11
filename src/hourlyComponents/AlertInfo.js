import React, { Component } from 'react';
import '../App.css';
import AlertInfoList from './AlertInfoList';

class AlertInfo extends Component {
  
    render() {

        if (typeof(this.props.alertInfo.alerts) !== 'undefined' || this.props.alertInfo.alerts != null) {
            const list = this.props.alertInfo.alerts;
            const alertInfoList = list.map( (item,index) =>
                <AlertInfoList alertInfo={this.props.alertInfo} item={item} key={index}>
                </AlertInfoList>
            );
            
            return (
                <ul>
                    {alertInfoList}
                </ul>
            );
        }
        else {
            return (<div></div>);
        }
    }
}
export default AlertInfo;