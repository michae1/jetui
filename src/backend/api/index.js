'use strict';

var express = require( 'express' ),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    axios = require('axios');


var instance = axios.create({
    baseURL: 'http://partners.api.skyscanner.net/apiservices/',
    timeout: 1000,
    headers: {Accept: 'application/json'}
});

function convertSuggestData(response){
    var converted = [];
    if (response.data.Places){
        converted = response.data.Places;
    }
    return converted;
}
function convertCheapestData(response){
    var converted = [],
        places = {};

    if (response.data){
        converted = response.data;
    }
    // indexes:
    converted.Places.forEach( (p) => {
        places[p.PlaceId] = p;
    });
    return converted.Quotes
        .filter ( (q) => { return !!q.OutboundLeg})
        .map( (q) => {
            console.log(q)
            if (q.OutboundLeg) {
                q.OutboundLeg.origin = places[q.OutboundLeg.OriginId];
                q.OutboundLeg.destination = places[q.OutboundLeg.DestinationId];
            } 
            return q;
        } );
}
function destinations( req, res ){
    var params = req.query,
        term = params.term,
        url = 'autosuggest/v1.0/UA/USD/en-GB/?query='+term+'&apiKey=pr243571444849292583741347489452';

    return instance.get(url)
        .then(convertSuggestData)
        .then(function(results){
            if( results ){
                res.writeHead( 200 );
                res.end( JSON.stringify(results) );
            } else
                res.status( 404 ).send('No results found');
        })
        .catch(function (error) {
            console.log('ERR:', error);
        });
}

function cheapest( req, res ){
    const params = req.query,
        origin = params.from || 'anywhere',
        destination = params.to || 'anywhere',
        depart = params.depart || 'anytime',
        returns = params.returns || 'anytime';


    if (!params.from && !params.to && !params.depart && !params.returns){
        res.status( 500 ).send('Incomplete parameters');
        return false;
    }

    let apiType = 'browseroutes';

    if ( (params.from && params.to) || ( params.from && params.depart ) ){
        apiType = 'browsedates';
    }

    let url = `${apiType}/v1.0/UA/USD/en-US/${origin}/${destination}/${depart}/${returns}?apiKey=prtl6749387986743898559646983194`;

    return instance.get(url)
        .then(convertCheapestData)
        .then(function(results){
            if( results ){
                res.writeHead( 200 );
                res.end( JSON.stringify(results) );
            }
            else {
                res.status( 404 ).send('No results found');
            }
        })
        .catch(function (error) {
            console.log('ERR:', error);
            res.status( 500 ).send('Error');
        });
}

module.exports = function(app) {
    function handleErrors( cb ) {
        return function(req, res, next) {
            try {
                return cb.apply( app, arguments );
            } catch( err ) {
                next( err );
                return false;
            }
        };
    }

    app.use(
        '/api',
        express()
            .use( bodyParser.json({limit: '50mb'}) )
            .use( '/destinations', handleErrors(destinations) )
            .use( '/cheapest', handleErrors(cheapest) )
            .use( function(err, req, res ) {
                console.log('got error', err);
                res.writeHead( 500 );
                res.end( err.message );
            })
    );
};
