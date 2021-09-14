import { Grid } from '@material-ui/core';
import React from 'react'
import Note from './note/Note';

const noteData = [
    {
        title: "Title 1",
        message: "This is a demo note 1."
    },
    {
        title: "Title 2",
        message: "This is a demo note 2."
    },
    {
        title: "Title 3",
        message: "This is a demo note 3."
    },
    {
        title: "Title 4",
        message: "This is a demo note 4."
    },
    {
        title: "Title 5",
        message: "This is a demo note 5."
    }
];

const Notes = () => {
    return (
        <>
            <Grid container spacing={2} justify="center">
                {
                    noteData.map((note) => (
                        <Note note={note} />
                    ))
                }
            </Grid>
        </>
    )
}

export default Notes
