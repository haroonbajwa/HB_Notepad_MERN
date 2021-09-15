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