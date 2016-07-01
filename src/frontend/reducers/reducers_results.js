export function ResultsReducer(state = {items: []}, action) {
		switch(action.type) {
			case 'SHOW_RESULTS':
				return Object.assign( {}, state, {items: action.payload}, {isLoading: false} );
			case 'SHOW_LOADING_RESULTS':
				return Object.assign( {}, state, {items: []}, {isLoading: true} );	
		}
	return state;
}



