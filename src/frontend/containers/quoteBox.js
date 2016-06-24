import React, {Component} from 'react';
import Destination from './destination';
import DateComp from './date';
import FindButton from './findButton';

export default class QuoteBox extends Component {
	render() {
		console.log('this.props.onChangeQuote', this.props.onChangeQuote)
    	return (
			<div className='quote-box'>Cheapest flights from city
				<div class="row">
					<Destination direction="From" key="dest-from" getDestinations={this.props.getDestinations} onChangeQuote={this.props.onChangeQuote}/>
					<Destination direction="To" key="dest-to" getDestinations={this.props.getDestinations} onChangeQuote={this.props.onChangeQuote} />
				</div>
				<div class="row">
					<DateComp label="Departure" onChangeQuote={this.props.onChangeQuote} />
					<DateComp label="Return" onChangeQuote={this.props.onChangeQuote} />
				</div>
				<div class="row pull-right">
					<FindButton onClick={this.props.doSearch}/>
				</div>
			</div>
    	);
  	}
}