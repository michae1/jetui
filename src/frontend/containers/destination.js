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

	onUpdateInput(inputValue) {
		var self = this;
  	}

	render() {
		var self = this;
		const doSearch = _.debounce((term) => { this.props.getDestinations.call(self, term) }, 300);

	    return (
			<div className='destination'>
				<AutoComplete
					floatingLabelText={this.props.direction}
					filter={AutoComplete.noFilter}
					openOnFocus={true}
					onUpdateInput = { _.debounce((term) => { this.props.enterText(term) }, 300) }
					dataSource={this.props.quoteOrigin}
					dataSourceConfig={dataSourceConfig}
			    	/
			    	>
		    </div>
	    );
 	}
}

function mapStateToProps(state) {
	return {
		quoteOrigin: state.quoteOrigin
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ enterText: enterText }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps )(Destination);