import axios from 'axios';

const addFlashcard = flashcard => ({
  type: 'ADD_FLASHCARD',
  payload: flashcard,
});

const loadFlashcards = flashcards => ({
  type: 'LOAD_FLASHCARDS',
  payload: flashcards,
});

const SaveFlashcard = flashcard => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.post('https://spacer-repetition-api.herokuapp.com/v1/flashcards', flashcard, { headers }).then(res => {
    if (!res.data === 'error') {
      dispatch(addFlashcard(res.data));
    }
  }).catch(error => {
    throw (error);
  });
};

const fetchFlashcards = () => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.get('https://spacer-repetition-api.herokuapp.com/v1/flashcards?filter=active', { headers }).then(res => {
    dispatch(loadFlashcards(res.data));
  }).catch(error => {
    throw (error);
  });
};

export default {
  SaveFlashcard,
  fetchFlashcards,
};
