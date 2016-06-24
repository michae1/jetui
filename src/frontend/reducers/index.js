import { combineReducers } from 'redux';
// import ResultsReducer from './reducer_results';
import QuoteOriginReducer from './reducers_quote';

const rootReducer = combineReducers({
  quoteOrigin: QuoteOriginReducer,
});

export default rootReducer;