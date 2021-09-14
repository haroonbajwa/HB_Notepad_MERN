import Header from "./components/header/Header";
import AddNote from "./components/addNote/AddNote";
import Notes from "./components/notes/Notes";

import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <>
    <Header />
    <Container>
      <Grid container spacing={4} justify="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <AddNote />
        </Grid>
        <Grid item xs={12}>
          <Notes />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;
