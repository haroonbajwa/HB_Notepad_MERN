import { CREATE, FETCH_ALL, FETCH_BY_SEARCH } from '../constants/actionTypes';

const notes = (state = { notes: [] }, action) => {
    switch (action.type) {
        
        case FETCH_ALL:
            return {
                ...state,
                notes: action.payload.data
            };

        case CREATE:
            return { ...state, notes: [...state.notes, action.payload] };

        case FETCH_BY_SEARCH:
            return { ...state, notes: action.payload };

        default:
            return state;
    }
}

export default notes;