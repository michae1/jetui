import { combineReducers } from 'redux';
// import ResultsReducer from './reducer_results';
import { SuggestReducer, DestinationReducer, OriginReducer, DepartureReducer, ReturnReducer } from './reducers_quote';
import { ResultsReducer } from './reducers_results';

const rootReducer = combineReducers({
	originSuggests: SuggestReducer,
	destinationSuggests: SuggestReducer,
	origin: OriginReducer,
	destination: DestinationReducer,
	departureDate: DepartureReducer,
	returnDate: ReturnReducer,
	results: ResultsReducer
});

export default rootReducer;