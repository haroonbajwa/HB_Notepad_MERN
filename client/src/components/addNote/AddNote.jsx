import React, { useState, useEffect } from 'react'
import { TextField, TextareaAutosize, Paper, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ClearAllIcon from '@material-ui/icons/ClearAll';

import { useDispatch, useSelector } from 'react-redux'
import { createNote, updateNote } from '../../actions/notes'

import useStyles from './styles'

const AddNote = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [noteData, setNoteData] = useState({
        title: '',
        message: ''
    });

    const note = useSelector((state) => currentId ? state.notes.find((n) => n._id === currentId) : null);

    useEffect(() => {
        if(note) setNoteData(note);
    }, [note]);

    const handleSubmit = (e) => {

        if(currentId) {
            dispatch(updateNote(currentId, { ...noteData }))
        } else {
            dispatch(createNote(noteData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setNoteData({ title: '', message: ''});
    }

    return (
        <>
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
                <TextField label="Title" fullWidth value={noteData.title} onChange={(e) => setNoteData({...noteData, title: e.target.value})} />
                <TextareaAutosize
                maxRows="7"
                minRows="4"
                value={noteData.message}
                onChange={(e) => setNoteData({...noteData, message: e.target.value})}
                placeholder="Type Your Note here..."
                className={classes.messageBox}/>
            </form>
            <div style={{display:'block'}}>
                <IconButton color="primary" size="medium" onClick={handleSubmit} className={classes.submitButton}>
                    <AddCircleIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" size="medium" onClick={clear} className={classes.submitButton}>
                    <ClearAllIcon fontSize="large" />
                </IconButton>
            </div>

        </Paper>
        
        </>
    )
}

export default AddNote
