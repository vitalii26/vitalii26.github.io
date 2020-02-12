import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 import './GoogleMap.scss'
 import MyGreatPlace from './Marker';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 49.0666,
         lng: 33.4136
    },
    zoom: 18
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%',  border: '2px solid red' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBN8P2nuvYrbNQmv4QtqMaAhnT3saDEm8U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <MyGreatPlace
            lat={49.0666}
            lng={33.4136}
            text="FoodiPizza"
            className="marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;