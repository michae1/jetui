import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { enterText, setDestination } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

class Destination extends Component {

	onFocusEmpty() {
		if (!_.get(this.state, 'searchText'))
			this.props.enterText();
  	}

  	onSelectSuggest(destination) {
  		console.log('on new')
		this.props.setDestination(destination);
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
					onUpdateInput = { _.debounce((term) => { 
						this.props.enterText(term); 
						this.setState({
		    				searchText: term
        				}) 
					}, 300) }
					onNewRequest = {(x)=>{this.onSelectSuggest(x)}}
					onFocus = {(x)=>{this.onFocusEmpty()}}
 					dataSource={this.props.quoteSuggests}
					dataSourceConfig={dataSourceConfig}
			    	/
			    	>
		    </div>
	    );
 	}
}

function mapStateToProps(state) {
	return {
		quoteSuggests: state.quoteSuggests
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
  	enterText: enterText, 
  	setDestination: setDestination }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps )(Destination);