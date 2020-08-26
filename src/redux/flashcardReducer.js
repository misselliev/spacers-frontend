export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_FLASHCARDS':
      return { ...state, flashcards: payload };
    case 'LOAD_MASTERED':
      return { ...state, flashcards: payload };
    case 'ADD_FLASHCARD':
      return { ...state, flashcards: [...state.flashcards, payload] };
    case 'SEND_FLASHCARDS':
      return { ...state, flashcards: payload };
    default:
      return state;
  }
};
