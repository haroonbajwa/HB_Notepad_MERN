import React from 'react'
import { Paper } from '@material-ui/core'
import randomColor from 'randomcolor'
import { makeStyles } from "@material-ui/core/styles";

import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
    noteClip: {
        transform: 'rotate(-45deg)',
        marginLeft: '-36px',
        marginTop: '-30px'
    }
}))


const Note = ({ note }) => {

    const classes = useStyles();

    var color = 'red';
    color = randomColor();
    return (
        
            <Paper elevation={3} style={{padding:'20px', margin:'20px 20px', backgroundColor:`${color}`}}>
            <AttachFileIcon fontSize="large" className={classes.noteClip} />
                <h3>{note.title}</h3>
                <p>{note.message}</p>
            </Paper>
        
    )
}

export default Note
