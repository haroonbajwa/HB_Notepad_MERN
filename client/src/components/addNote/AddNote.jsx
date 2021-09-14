import React, { useState } from 'react'
import { TextField, TextareaAutosize, Paper, IconButton } from '@material-ui/core'

import AddCircleIcon from '@material-ui/icons/AddCircle';

import useStyles from './styles'

const AddNote = () => {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
                <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                <TextareaAutosize maxRows="7" minRows="4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type Your Note here..." className={classes.messageBox}/>
            </form>
            <IconButton color="primary" size="medium" className={classes.submitButton}>
                <AddCircleIcon fontSize="large" />
            </IconButton>
        </Paper>
        
        </>
    )
}

export default AddNote
