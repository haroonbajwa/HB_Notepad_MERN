import * as api from '../api';
import { CREATE, FETCH_ALL } from '../constants/actionTypes';

//Action Creators
export const getNotes = () => async (dispatch) => {

    try {
        const { data } = await api.fetchNotes();

        dispatch( {type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }   
    
}

export const createNote = (note) => async (dispatch) => {
    try {
        const { data } = await api.createNote(note);

        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}