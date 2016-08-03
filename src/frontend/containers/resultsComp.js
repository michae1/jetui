import React, {Component} from 'react';
import { enterText, setDestination, setDate, getSearchResults } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import _ from 'lodash';
import moment from 'moment'; 
import ResultsItem from '../components/resultItem';


function getMainText(obj){
	return "$" + _.get(obj, 'MinPrice') + "   " +  _.get(obj, 'OutboundLeg.origin.CityName') + " " + _.get(obj, 'OutboundLeg.destination.CityName');
}

function getSecondaryText(obj){
	return moment(_.get(obj, 'QuoteDateTime')).format("MMM Do YY");
}


class ResultsComp extends Component {
  	render() {
	  	if (_.get(this.props, 'results.isLoading')){
	  		return (
				<div className='results'>
					<CircularProgress />
				</div>
	   		);
	  	}
	    return (
			<div className='results'>
					{ this.props.results.items.map(function(object, i){
				        return <ResultsItem key={i} object={object} />
				    }) }		
  
			</div>
	    );
	}
}

/*
<CardHeader
						      title={getMainText(object)}
						      subtitle={getSecondaryText(object)}
						      actAsExpander={true}
						      showExpandableButton={false}
						    />
						    <CardText expandable={true}>
						      <div>$100</div> Super cheap flight
						    </CardText>
				        </Card> 
*/
function mapStateToProps(state) {
	return {
		results: state.results,
	};
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ 
  		enterText: enterText, 
  	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps )(ResultsComp);
