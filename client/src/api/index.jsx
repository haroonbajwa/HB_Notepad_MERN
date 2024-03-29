import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchNotes = () => API.get('/notes');
export const createNote = (newNote) => API.post('/notes', newNote);
export const fetchNotesBySearch = (searchQuery) => API.get(`/notes/search?searchQuery=${searchQuery.search || 'none'}`);
export const updateNote = (id, updatedNote) => API.patch(`/notes/${id}`, updatedNote);
export const deleteNote = (id) => API.delete(`/notes/${id}`);