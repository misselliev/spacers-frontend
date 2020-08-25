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
  axios.post('https://localhost:3001', flashcard).then(res => {
    if (!res.data === 'error') {
      dispatch(addFlashcard(res.data));
    }
  }).catch(error => {
    throw (error);
  });
};

const fetchFlashcards = () => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.get('https://localhost:3001', { headers }).then(res => {
    dispatch(loadFlashcards(res.data));
  }).catch(error => {
    throw (error);
  });
};

export default {
  SaveFlashcard,
  fetchFlashcards,
};
