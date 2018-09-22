import React from 'react';
import { Container } from 'reactstrap';
import NavigationBar from './components/NavigationBar';
import DataContainer from './container/DataContainer';

const App = () => (
  <React.Fragment>
    <NavigationBar />
    <Container>
      <DataContainer />
    </Container>
  </React.Fragment>

);

export default App;
