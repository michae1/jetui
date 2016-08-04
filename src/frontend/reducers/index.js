import { combineReducers } from 'redux';
// import ResultsReducer from './reducer_results';
import { SuggestReducer, DestinationReducer, OriginReducer, DepartureReducer, ReturnReducer } from './reducers_quote';
import { ResultsReducer } from './reducers_results';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers_auth';

const rootReducer = combineReducers({
    originSuggests: SuggestReducer,
    destinationSuggests: SuggestReducer,
    origin: OriginReducer,
    destination: DestinationReducer,
    departureDate: DepartureReducer,
    returnDate: ReturnReducer,
    results: ResultsReducer,
    form: formReducer,
    auth: authReducer
});

export default rootReducer;
