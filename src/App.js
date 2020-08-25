import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
// import Flashcard from './components/flashcard';

const App = () => (
  <Router>
    <div className="App">
      <Routes />
      {/* <Flashcard id="2" question="who is a good boy" answer="all dogs are good boys" /> */}
    </div>
  </Router>
);

export default App;
