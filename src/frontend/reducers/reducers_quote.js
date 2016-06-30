export function SuggestReducer(state = [], action) {
		switch(action.type) {
			case 'SHOW_SUGGESTS':
				return action.payload;
			case 'SHOW_LOADING_RESULTS':
				return [];
		}
	return state;
}

export function DestinationReducer(state = [], action) {
		switch(action.type) {
			case 'SET_DESTINATION':
				return action.payload;
		}
	return state;
}

