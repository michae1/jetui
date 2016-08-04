export function SuggestReducer(state = [], action) {
    switch(action.type) {
    case 'SHOW_SUGGESTS':
        return action.payload;
    case 'SHOW_LOADING_RESULTS':
        return [];
    default:
        return state;
    }
}

export function DestinationReducer(state = [], action) {
    switch(action.type) {
    case 'SET_DESTINATION_DESTINATION':
        return action.payload;
    default:
        return state;
    }
}

export function OriginReducer(state = [], action) {
    switch(action.type) {
    case 'SET_DESTINATION_ORIGIN':
        return action.payload;
    default:
        return state;
    }
}

export function DepartureReducer(state = null, action) {
    switch(action.type) {
    case 'SET_DATE_DEPARTURE':
        return action.payload;
    default:
        return state;
    }
}

export function ReturnReducer(state = null, action) {
    switch(action.type) {
    case 'SET_DATE_RETURN':
        return action.payload;
    default:
        return state;
    }
}

