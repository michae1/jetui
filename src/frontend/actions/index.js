import axios from 'axios';

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

export function setDate(destination, target = "") {
	return { type: 'SET_DATE_' + target.toUpperCase(), payload: destination }
}

export function getSearchResults(quote) {
	console.log('q', quote)
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

