import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core';
import Note from './note/Note';
import { getNotes } from '../../actions/notes';

const Notes = () => {

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    return (
        <>
            <Grid container spacing={2} justify="center">
                {
                    notes.map((note) => (
                        <Grid item key={note._id} xs={12} sm={6} md={4} lg={3} justify="center">
                            <Note note={note} />
                        </Grid>
                        ))
                }
            </Grid>
        </>
    )
}

export default Notes
