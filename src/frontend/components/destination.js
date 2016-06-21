import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

export default class Destination extends Component {
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
		var self = this;
		const doSearch = _.debounce((term) => { this.props.getDestinations.call(self, term) }, 300);

	    return (
			<div className='destination'>
				<MuiThemeProvider>
					<AutoComplete
					floatingLabelText={this.props.direction}
					filter={AutoComplete.noFilter}
					openOnFocus={true}
					onUpdateInput = {doSearch}
					dataSource={this.state.dataSource}
					dataSourceConfig={dataSourceConfig}
			    	/
			    	>
		    	</MuiThemeProvider>
		    </div>
	    );
  }
}