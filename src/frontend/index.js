import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import routes from './routes';


var API_KEY = 'pr243571444849292583741347489452';

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={createStore(reducers,
						compose(
						 	applyMiddleware(thunk), 
						 	window.devToolsExtension ? window.devToolsExtension() : f => f
						))}>
			<Router history={hashHistory} routes={routes} />
		</Provider>
	</MuiThemeProvider >	
  , document.getElementById('root'));


