import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Routes from './Routes';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  </Router>
);

export default App;
