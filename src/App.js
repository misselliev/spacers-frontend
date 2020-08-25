import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

const App = () => (
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>
);

export default App;
