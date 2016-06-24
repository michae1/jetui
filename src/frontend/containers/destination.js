import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { enterText } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

class Destination extends Component {
	constructor(props) {
		super(props);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.state = {
			dataSource : [
			  {textKey: 'Kiev', valueKey: 'IEV'},
			  {textKey: 'London', valueKey: 'LON'},
			],
			inputValue : ''
		}
	}
	onUpdateInput(inputValue) {
		var self = this;
		console.log('input updated', inputValue)
  	}

	render() {
		console.log('this.props.quoteOrigin', this.props.quoteOrigin)
		var self = this;
		const doSearch = _.debounce((term) => { this.props.getDestinations.call(self, term) }, 300);

	    return (
			<div className='destination'>
				<AutoComplete
					floatingLabelText={this.props.direction}
					filter={AutoComplete.noFilter}
					openOnFocus={true}
					onUpdateInput = {(inputValue) => this.props.enterText(inputValue)}
					dataSource={this.props.quoteOrigin}
					dataSourceConfig={dataSourceConfig}
			    	/
			    	>
		    </div>
	    );
 	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props
	// inside of BookList
	return {
		quoteOrigin: state.quoteOrigin
	};
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ enterText: enterText }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps )(Destination);