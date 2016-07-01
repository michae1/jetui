import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


import _ from 'lodash';

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

export default class Destination extends Component {

	render() {
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
					onNewRequest = {(x)=>{this.props.onSelectSuggest(x)}}
					onFocus = {(x)=>{this.props.onFocusEmpty()}}
 					dataSource={this.props.dataSource}
					dataSourceConfig={dataSourceConfig}
			    	/>
		    </div>
	    );
 	}
}
