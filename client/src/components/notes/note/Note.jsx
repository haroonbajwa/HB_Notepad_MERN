import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import randomColor from 'randomcolor'

const Note = ({ note }) => {
    var color = 'red';
    color = randomColor();
    return (
        <Grid item key={note.id} xs={12} sm={6} md={4} lg={3} justify="center">
            <Paper elevation={3} style={{padding:'20px', margin:'20px 20px', backgroundColor:`${color}`}}>
                <h3>{note.title}</h3>
                <p>{note.message}</p>
            </Paper>
        </Grid>
    )
}

export default Note
