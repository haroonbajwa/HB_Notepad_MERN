import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import AddNote from '../addNote/AddNote'
import Notes from '../notes/Notes'

const Home = () => {

    const [currentId, setCurrentId] = useState(null);

    return (
        <Grid container spacing={4} justify="center">
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <AddNote currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12}>
            <Notes setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
    )
}

export default Home
