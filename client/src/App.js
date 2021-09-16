import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/notes" />} />
          <Route path="/notes" exact component={Home} />
          <Route path="/notes/search" exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
