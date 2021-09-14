import express from 'express';

// import  { getNote, getNotes, getNotesBySearch, createNote, updateNote, deleteNote }  from '../controllers/notes.js';
import  { getNotes, createNote }  from '../controllers/notes.js';

const router = express.Router();

// router.get('/search', getNotesBySearch);
// router.get('/:id', getNote);
router.get('/', getNotes);
router.post('/', createNote);
// router.patch('/:id', updateNote);
// router.delete('/:id', deleteNote);

export default router;