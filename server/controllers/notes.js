import mongoose from 'mongoose'
import NoteMessage from '../model/noteMessage.js'

export const getNotes = async (req, res) => {
    try {
        const notes = await NoteMessage.find();

        res.status(200).json({ data: notes });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createNote = async (req, res) => {
    const note = req.body;

    const newNote = new NoteMessage(note);

    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const getNotesBySearch = async (req, res) => {
    
    const { searchQuery } = req.query;
    
    try {
        const title = new RegExp(searchQuery, 'i');  // RegExp => Regular Expression

        const notes = await NoteMessage.find({ $or: [ { title } ]});

        res.json({ data: notes });

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await NoteMessage.findByIdAndRemove(id);

    res.send({ message: 'Note deleted successfully' });

}