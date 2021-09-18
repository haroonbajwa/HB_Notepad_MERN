import * as api from '../api';
import { CREATE, FETCH_ALL, FETCH_BY_SEARCH, UPDATE, DELETE } from '../constants/actionTypes';

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

export const getNotesBySearch = (searchQuery) => async(dispatch) => {
    try {
        const { data: { data } } = await api.fetchNotesBySearch(searchQuery);
        console.log(data);
        dispatch( {type: FETCH_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateNote = (id, note) => async (dispatch) => {
    try {
        const { data } = await api.updateNote(id, note);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteNote = (id) => async (dispatch) => {
    try {
        await api.deleteNote(id);
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}