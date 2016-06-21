import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Date extends Component {
  render() {
  	console.log('hi')
    return (
      <RaisedButton label="Find" primary={true} />
    );
  }
}