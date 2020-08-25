import { combineReducers } from 'redux';
import user from './userReducer';
import flashcards from './flashcardReducer';

export default combineReducers({ user, flashcards });
