import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


var API_KEY = 'pr243571444849292583741347489452';

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={createStore(reducers)}>
			<App />
		</Provider>
	</MuiThemeProvider >	
  , document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}