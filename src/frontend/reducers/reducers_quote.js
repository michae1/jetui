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
			case 'SET_DESTINATION_DESTINATION':
				return action.payload;
		}
	return state;
}

export function OriginReducer(state = [], action) {
		switch(action.type) {
			case 'SET_DESTINATION_ORIGIN':
				return action.payload;
		}
	return state;
}

export function DepartureReducer(state = [], action) {
		switch(action.type) {
			case 'SET_DATE_DEPARTURE':
				return action.payload;
		}
	return state;
}

export function ReturnReducer(state = [], action) {
		switch(action.type) {
			case 'SET_DATE_RETURN':
				return action.payload;
		}
	return state;
}

