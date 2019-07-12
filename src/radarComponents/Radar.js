import React, { Component } from 'react';
import '../App.css';
import postscribe from 'postscribe';
class Radar extends Component {
  
  componentDidMount() {
    let script = `<script type="text/javascript" src="https://darksky.net/map-embed/@radar,${this.props.weather.coord.lat},${this.props.weather.coord.lon},11.js?embed=true&timeControl=true&fieldControl=true&defaultField=radar"></script>`
    postscribe("#radar",script);
  }
  
  componentDidUpdate(prevProps) {
    
    if (prevProps.weather !== this.props.weather) {
      document.getElementById("radar").innerHTML = '';
      let script = `<script type="text/javascript" src="https://darksky.net/map-embed/@radar,${this.props.weather.coord.lat},${this.props.weather.coord.lon},11.js?embed=true&timeControl=true&fieldControl=true&defaultField=radar"></script>`
      postscribe("#radar",script);
    }
  }
  render() {
    
    return (
        <div className="Container">
          <div id="radar"/>
        </div>
    );
  }
  
  
}
export default Radar;