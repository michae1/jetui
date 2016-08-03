import axios from 'axios';
import moment from 'moment';
import { hashHistory } from 'react-router';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

const topCities = [
	{textKey: 'IEV', valueKey: 'Kiev'},
	{textKey: 'LON', valueKey: 'London'},
	{textKey: 'DFW', valueKey: 'Dallas'}
]

function showSuggests(text) {
	return { type: 'SHOW_SUGGESTS', payload: text }
}

export function enterText(text, target) {
	return function (dispatch) {
		if (!text){
			dispatch(showSuggests( topCities ))
			return false;
		}

		return axios.get('/api/destinations?term='+text)
			.then(function(r){
				var dataSource = r.data.map((x)=>{return {textKey: x.PlaceId.replace('-sky',''), valueKey: x.PlaceName}});
				dispatch(showSuggests( dataSource, target ))
			})
		}
}

function showLoadingResults() {
	return { type: 'SHOW_LOADING_RESULTS', payload: [] }
}

function showResults(results) {
	return { type: 'SHOW_RESULTS', payload: results }
}

export function setDestination(destination, target = "") {
	return { type: 'SET_DESTINATION_' + target.toUpperCase(), payload: destination }
}

function setDate(destination, target=""){
	return { type: 'SET_DATE_' + target.toUpperCase(), payload: destination }
}

export function setDateWithRelated(destination, target = "", related = "") {
	return (dispatch, getState) => {
		if (target == 'departure'){
			let rd = getState().returnDate;
			if (rd && moment(rd).diff(destination, 'month') > 3){
				dispatch(setDate(moment(destination).add(3, 'month').toDate(), "return"));
			}
		}
		dispatch(setDate(destination, target)); 

	}
}

export function getSearchResults(quote) {
	return function (dispatch) {
		dispatch(showLoadingResults()) 
		return axios.get('/api/cheapest', {params: quote})
			.then(function(r){
				var dataSource = r.data.map((x)=>{return x}).sort(function(a, b) {
				  return a.MinPrice - b.MinPrice;
				});
				dispatch(showResults( dataSource ))
			})
		}
}

export function signinUser({email, password}) {
	return function (dispatch) {
		console.log({email, password})
		return axios.post('/signin', {email, password})
			.then(function(res){
				dispatch({  type: AUTH_USER });
				localStorage.setItem('token', res.data.token);
				hashHistory.push('/');
			})
	}
}

export function signupUser({email, password}) {
	return function (dispatch) {
		console.log({email, password})
		return axios.post('/signup', {email, password})
			.then(function(res){
				dispatch({ type: 'AUTH_LOGIN', payload: true });
				localStorage.setItem('token', res.data.token);
				hashHistory.push('/');
			})
			.catch(response => {
				console.log('r:',response);
				dispatch(authError(response.data.error))
			});
	}
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  hashHistory.push('/');
  return { type: UNAUTH_USER };
}