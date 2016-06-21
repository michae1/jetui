import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './components/quoteBox';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import axios from 'axios';

var API_KEY = 'pr243571444849292583741347489452';

function getDestinations(term){
	console.log('sending req')
	var self = this;
	return axios.get('/api/destinations?term='+term)
		.then(function(r){
			var dataSource = r.data.map((x)=>{return x.PlaceName});
			console.log('dataSource', dataSource)
			self.setState({dataSource}) 
		})
	// 
	// this.setState({dataSource}) 
}

injectTapEventPlugin();


class App extends Component {
	render() {
		return <div>
			<QuoteBox getDestinations={getDestinations} />
		</div>;
	}
}

ReactDOM.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider >	
  , document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}