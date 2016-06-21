import React, {Component} from 'react';
import Destination from './destination';
import DateComp from './date';
import FindButton from './findButton';

export default class QuoteBox extends Component {
  render() {
  	
    return (
		<div className='quote-box'>Cheapest flights from city
			<div class="row">
				<Destination direction="From" key="dest-from" getDestinations={this.props.getDestinations}/>
				<Destination direction="To" key="dest-to" getDestinations={this.props.getDestinations} />
			</div>
			<div class="row">
				<DateComp label="Departure"  />
				<DateComp label="Return"  />
			</div>
			<div class="row pull-right">
				<FindButton />
			</div>
		</div>
    );
  }
}