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
import { AUTH_USER } from './actions/types';


var API_KEY = 'pr243571444849292583741347489452';

injectTapEventPlugin();

const token = localStorage.getItem('token');
const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
// If we have a token, consider the user to be signed in
if (token) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={hashHistory} routes={routes} />
        </Provider>
    </MuiThemeProvider >
  , document.getElementById('root'));


