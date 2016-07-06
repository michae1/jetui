import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from '../containers/quoteBox';
import ResultsComp from '../containers/resultsComp';

export default class Flights extends Component {
	render() {
		return <div>
			<QuoteBox />
			<ResultsComp />
		</div>;
	}
}

