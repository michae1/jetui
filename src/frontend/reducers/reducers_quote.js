export default function(state = [], action) {
		switch(action.type) {
			case 'SHOW_SUGGESTS':
				return action.payload;
			case 'SHOW_LOADING_RESULTS':
				return [];
			}   
	return state;
}