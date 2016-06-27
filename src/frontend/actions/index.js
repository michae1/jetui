import axios from 'axios';

function showSuggests(text) {
	return { type: 'SHOW_SUGGESTS', payload: text }
}

export function enterText(text) {
	return function (dispatch) {
		return axios.get('/api/destinations?term='+text)
			.then(function(r){
				var dataSource = r.data.map((x)=>{return {textKey: x.PlaceId.replace('-sky',''), valueKey: x.PlaceName}});
				dispatch(showSuggests( dataSource ))
			})
		}
}

function showLoadingResults() {
	return { type: 'SHOW_LOADING_RESULTS', payload: [] }
}

export function getSearchResults(quote) {
	dispatch(showSuggests( dataSource )) 
	return function (dispatch) {
		return axios.get('/api/cheapest', quote)
			.then(function(r){
				var dataSource = r.data.map((x)=>{return {textKey: x.CityId.replace('-sky',''), valueKey: x.PlaceName}});
				dispatch(showSuggests( dataSource ))
			})
		}
}

