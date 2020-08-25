import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import HomePage from './pages/homepage';
import NewFlashcard from './pages/newflashcard';
import Flashcard from './pages/flashcards';
import FlashcardEdit from './pages/editflashcard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/flashcards" component={Flashcard} />
    <Route path="/newflashcard" component={NewFlashcard} />
    <Route path="/editflashcard" component={FlashcardEdit} />
  </Switch>
);

export default Routes;
