import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import SignupPage from './pages/signup';
import LoginPage from './pages/login';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
    </div>
  </Router>
);

export default App;
