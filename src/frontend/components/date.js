import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';



export default class DateComp extends Component {
	render() {
		return (
			<div className='date'><DatePicker 
					label={this.props.label} 
					id={'wgt-'+this.props.label} 
					hintText={this.props.label}
					autoOk={true}
					onChange={ (null_param, x) => { console.log('x', x); this.props.onChange(x) }}
					container="inline"/>
			</div>
		);
	}
}