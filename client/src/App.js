import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddContact from './container/AddContact';
import Contact from './components/contact/Contact';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route exact path="/add" component={AddContact} />
        </Switch>
      </Container>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
