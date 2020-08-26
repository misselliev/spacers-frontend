import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Routes from './Routes';
import Navbar from './components/navbar';

const App = () => {
  const user = useSelector(state => state.user);
  const greeting = user.currentUser ? (
    <div>
      <Navbar />
    </div>
  ) : null;
  return (
    <Router>
      <div className="App">
        {greeting}
        <Routes />
      </div>
    </Router>
  );
};

export default App;
