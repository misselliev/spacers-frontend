import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import NewFlashcard from './pages/newflashcard';
import Flashcard from './components/flashcard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/flashcards" component={Flashcard} />
    <Route exact path="/newflashcard" component={NewFlashcard} />

  </Switch>
);

export default Routes;