import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';



export default class DateComp extends Component {
  setData(evt, date) {
      console.log(date)
      let dataObj = {};
      dataObj[this.props.label.toLowerCase()] = date;
      this.props.onChangeQuote(dataObj);
  }
  render() {
    console.log(this)
    return (
      <div className='date'><DatePicker 
      		label={this.props.label} 
      		id={'wgt-'+this.props.label} 
      		hintText={this.props.label}
          autoOk={true}
          onChange={this.setData.bind(this)}
      		container="inline"/>
      </div>
    );
  }
}