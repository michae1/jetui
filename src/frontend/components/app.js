import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from '../containers/quoteBox';
import ResultsComp from '../containers/resultsComp';

export default class App extends Component {
	render() {
		return <div>
			<QuoteBox />
			<ResultsComp />
		</div>;
	}
}

if (module.hot) {
    module.hot.accept();
}