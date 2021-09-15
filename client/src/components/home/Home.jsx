import React from 'react'
import { Grid } from '@material-ui/core'
import AddNote from '../addNote/AddNote'
import Notes from '../notes/Notes'

const Home = () => {
    return (
        <Grid container spacing={4} justify="center">
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <AddNote />
          </Grid>
          <Grid item xs={12}>
            <Notes />
          </Grid>
        </Grid>
    )
}

export default Home
