import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DateComp extends Component {
    render() {
        return (
            <div className='date'><DatePicker
                    label={this.props.label}
                    id={'wgt-'+this.props.label}
                    hintText={this.props.label}
                    value={this.props.value}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                    autoOk={true}
                    onChange={ (nullParam, x) => { this.props.onChange(x); }}
                    container="inline"/>
            </div>
        );
    }
}

DateComp.propTypes = {
    label: React.PropTypes.string,
    value: React.PropTypes.object,
    minDate: React.PropTypes.object,
    maxDate: React.PropTypes.object,
    onChange: React.PropTypes.func
};
