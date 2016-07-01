var express = require( 'express' ),
	bodyParser = require('body-parser'),
	axios = require('axios');


var instance = axios.create({
	  baseURL: 'http://partners.api.skyscanner.net/apiservices/',
	  timeout: 1000,
	  headers: {'Accept': 'application/json'}
	});	

module.exports = function(app) {

    function handleErrors( cb ) {
        return function(req, res, next) {
    		console.log('handle error?')
            try {
                return cb.apply( app, arguments );
            } catch( err ) { next( err ) }
        }
    }

    app.use(
        '/api',
        express()
            .use( bodyParser.json({limit: '50mb'}) )
            .use( '/destinations',  handleErrors(destinations) )
            .use( '/cheapest',  handleErrors(cheapest) )
            .use( function(err, req, res, _ ) {
            	console.log('got error', err)
                res.writeHead( 500 );
                res.end( err.message );
            })
    );

};
function convertSuggestData(response){
	var converted = [];
	if (response.data.Places){
		converted = response.data.Places;
	}
	return converted;
}
function convertCheapestData(response){
    console.log('conv')
	var converted = [];
	if (response.data){
		converted = response.data;
	}
	// indexes:
    var places = {};
    converted.Places.forEach( (p) => {places[p.PlaceId] = p} )
    return converted.Quotes.map( (q) => {
        q.OutboundLeg.origin = places[q.OutboundLeg.OriginId];
        q.OutboundLeg.destination = places[q.OutboundLeg.DestinationId];
        return q;
    } )
}
function destinations( req, res ){
    var params = req.query,
    	term = params.term,
    	url = 'autosuggest/v1.0/UA/USD/en-GB/?query='+term+'&apiKey=pr243571444849292583741347489452';

    return instance.get(url)
    	.then(convertSuggestData)
    	.then(function(results){
    		console.log('results here', results );
    		if( results ){
                res.writeHead( 200 );
                res.end( JSON.stringify(results) );
            }
            else
                res.status( 404 ).send('No results found');
    	})
    	.catch(function (error) {
		    console.log('ERR:', error);
	  	});
}

function cheapest( req, res ){
	var params = req.query,
    	origin = params.from || 'anywhere',
    	destination = params.to || 'anywhere',
    	depart = params.depart || 'anytime',
    	returns = params.returns || 'anytime',
    	url = `browseroutes/v1.0/UA/USD/en-US/${origin}/${destination}/${depart}/${returns}?apiKey=prtl6749387986743898559646983194`;
    console.log('url', params)
	if (!params.from && !params.to && !params.depart && !params.returns){
		res.status( 500 ).send('Incomplete parameters');
		return false;
	}
    console.log('lets req')
	
    return instance.get(url)
    	.then(convertCheapestData)
    	.then(function(results){
    		if( results ){
                res.writeHead( 200 );
                res.end( JSON.stringify(results) );
            }
            else
                res.status( 404 ).send('No results found');
    	})
    	.catch(function (error) {
		    console.log('ERR:', error);
            res.status( 500 ).send('Error');
	  	});
	
}