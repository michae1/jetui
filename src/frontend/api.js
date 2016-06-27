import axios from 'axios';

export default {
	doSearch: (quote) => {
		console.log('doSearch',  this.quote)
		return axios.get('/api/cheapest', this.quote)
			.then(function(results){
				this.setState({
					results: results,
				});
			})
	},
	getDestinations: (term) => {
		var self = this;
		return axios.get('/api/destinations?term='+term)
			.then(function(r){
				var dataSource = r.data.map((x)=>{return {textKey: x.PlaceName, valueKey: x.PlaceId.replace('-sky','')}});
				console.log('dataSource', dataSource)
				// self.setState({dataSource}) 
			})
	}

}