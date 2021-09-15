import React, { useState } from 'react'
import { TextField, TextareaAutosize, Paper, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import { useDispatch } from 'react-redux'
import { createNote } from '../../actions/notes'

import useStyles from './styles'

const AddNote = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [noteData, setNoteData] = useState({
        title: '',
        message: ''
    });

    const handleSubmit = (e) => {

        dispatch(createNote(noteData));

        setNoteData({title:'', message:''});
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
            <IconButton color="primary" size="medium" onClick={handleSubmit} className={classes.submitButton}>
                <AddCircleIcon fontSize="large" />
            </IconButton>
        </Paper>
        
        </>
    )
}

export default AddNote
