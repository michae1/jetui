import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

export default class Date extends Component {
  render() {
    const realClick = _.debounce((term) => { this.props.onClick() }, 300);
    return (
      <RaisedButton label="Find" primary={true} onMouseDown={realClick}/>
    );
  }
}