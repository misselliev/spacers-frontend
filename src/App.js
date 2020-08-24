import React from 'react';
import './App.css';
import {
  Button,
} from 'semantic-ui-react';
import SignupPage from './pages/signup';

const App = () => (
  <div className="App">
    <div className="test">This is a test!</div>
    <Button> Am I working now? </Button>
    <SignupPage />
  </div>
);

export default App;
