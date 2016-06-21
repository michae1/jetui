import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DateComp extends Component {
  render() {
    return (
      <div className='date'><DatePicker 
      		label={this.props.label} 
      		id='wgt-{this.props.label}' 
      		hintText={this.props.label}
          autoOk={true}
      		container="inline"/></div>
    );
  }
}