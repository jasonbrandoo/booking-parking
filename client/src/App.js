import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </div>
);

export default App;
