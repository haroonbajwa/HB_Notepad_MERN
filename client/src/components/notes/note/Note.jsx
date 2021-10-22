import React from 'react'
import { Paper, IconButton } from '@material-ui/core'
import randomColor from 'randomcolor'

import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { useDispatch } from 'react-redux'

import { deleteNote } from '../../../actions/notes'

import useStyles from './styles'


const Note = ({ note, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    var color = 'red';
    color = randomColor();
    return (
        <>
        <Paper elevation={3} className={classes.mainPaper}>
            <Paper elevation={3} style={{padding:'20px', backgroundColor:`${color}`}}>
            <AttachFileIcon fontSize="large" className={classes.noteClip} />
                <h3>{note.title}</h3>
                <p>{note.message}</p>
            </Paper>
            <div className={classes.actionButtons}>
                <IconButton size="medium" color="primary" onClick={() => dispatch(deleteNote(note._id))}>
                        <DeleteIcon fontSize="medium" />
                </IconButton>
                <IconButton size="medium" color="primary" onClick={() => setCurrentId(note._id)}>
                        <EditIcon fontSize="medium" />
                </IconButton>
            </div>
            </Paper>
        </>
    )
}

export default Note
