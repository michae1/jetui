import { combineReducers } from 'redux';
// import ResultsReducer from './reducer_results';
import { SuggestReducer, DestinationReducer } from './reducers_quote';

const rootReducer = combineReducers({
	quoteSuggests: SuggestReducer,
	origin: DestinationReducer,
});

export default rootReducer;