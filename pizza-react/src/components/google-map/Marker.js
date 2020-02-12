import React, { Component} from 'react';
import { greatPlaceStyle } from './MyGreatPlace';

export default class Marker extends Component {


  static defaultProps = {};

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}