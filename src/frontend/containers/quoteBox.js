import React, {Component} from 'react';
import Destination from '../components/destination';
import DateComp from '../components/date';
import FindButton from '../components/findButton';
import { enterText, setDestination, setDateWithRelated, getSearchResults } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment'; 
import _ from 'lodash';

class QuoteBox extends Component {
	onFocusEmpty() {
		if (!_.get(this.state, 'searchText'))
			this.props.enterText();
  	}

  	onSelectSuggest(target, destination) {
		this.props.setDestination(destination, target);
  	}

  	onSelectDate(target, date) {
		this.props.setDateWithRelated(date, target);
  	}

  	doSearch() {
  		const ddate = _.get(this.props, 'departureDate'),
  			rdate = _.get(this.props, 'returnDate');
  		console.log("rdate", rdate)
  		this.props.getSearchResults({
  			from: _.get(this.props, 'origin.textKey'),
			to: _.get(this.props, 'destination.textKey'),	
			depart: ddate && moment(ddate).format("YYYY-MM-DD"),
			returns: rdate && moment(rdate).format("YYYY-MM-DD")
		});
  	}

	render() {
    	return (
			<div className='quote-box'>Cheapest flights from city
				<div class="row">
					<Destination 
						direction="From" 
						key="dest-from" 
						enterText={this.props.enterText.bind(this)} 
						onSelectSuggest={this.onSelectSuggest.bind(this, "origin")}
						onFocusEmpty={this.onFocusEmpty.bind(this)}
						dataSource={this.props.originSuggests} />
					<Destination 
						direction="To" 
						key="dest-to" 
						enterText={this.props.enterText.bind(this)}
						onSelectSuggest={this.onSelectSuggest.bind(this, "destination")} 
						onFocusEmpty={this.onFocusEmpty.bind(this)}
						dataSource={this.props.destinationSuggests}	/>
				</div>
				<div class="row">
					<DateComp label="Departure" onChange={this.onSelectDate.bind(this, "departure")} value={this.props.departureDate} />
					<DateComp 
						label="Return"
						onChange={this.onSelectDate.bind(this, "return")}
						value={this.props.returnDate} 
						minDate={this.props.departureDate} 
						maxDate={moment(this.props.departureDate).add(3, 'month').toDate()} />
				</div>
				<div class="row pull-right">
					<FindButton onClick={this.doSearch.bind(this)}/>
				</div>
			</div>
    	);
  	}
}

function mapStateToProps(state) {
	return {
		originSuggests: state.originSuggests,
		destinationSuggests: state.destinationSuggests,
		origin: state.origin,
		destination: state.destination,
		departureDate: state.departureDate,
		returnDate: state.returnDate
	};
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ 
  		enterText: enterText, 
  		setDestination: setDestination, 
  		setDateWithRelated: setDateWithRelated,
  		getSearchResults: getSearchResults
  	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps )(QuoteBox);
