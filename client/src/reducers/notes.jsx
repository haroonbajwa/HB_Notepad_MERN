import { CREATE, FETCH_ALL, FETCH_BY_SEARCH, DELETE } from '../constants/actionTypes';

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

        case DELETE:
            return { ...state, notes: state.notes.filter((note) => note._id !== action.payload) };

        default:
            return state;
    }
}

export default notes;