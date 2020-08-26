import React, { useEffect } from 'react';
import {
  Button, Icon,
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/flashcard.css';
import { ToastContainer, toast } from 'react-toastify';
import flashcardActions from '../redux/flashcardActions';
import 'react-toastify/dist/ReactToastify.css';

const Flashcard = ({ id, question, answer }) => {
  const dispatch = useDispatch();

  const notify = () => toast('🦄 Wow so easy!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    const card = document.getElementById(id);
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }, [id]);

  const handleClickTrue = e => {
    e.preventDefault();
    // console.log(JSON.stringify({ flashcards: [{ 'id': id,'correct': true }] }))
    // eslint-disable-next-line quote-props
    dispatch(flashcardActions.SendFlashcards({ flashcards: [{ 'id': id, 'correct': true }] }));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    notify();
  };

  const handleClickFalse = e => {
    e.preventDefault();
    // console.log({ flashcards: [{ 'id': id,'correct': false }] });
    // eslint-disable-next-line quote-props
    dispatch(flashcardActions.SendFlashcards({ flashcards: [{ 'id': id, 'correct': false }] }));
    // eslint-disable-next-line no-restricted-globals
    setTimeout(location.reload(), 5000);
    notify();
  };

  return (
    <div className="main-card" key={id}>
      <h3 className="main-text">Question of the day</h3>
      <div className="scene scene-card">
        <div id={id} className="card">
          <div className="card-face card-face-front">
            <h3>
              {question}
            </h3>
            <p className="flashcardButton">Flip</p>
          </div>
          <div className="card-face card-face-back">
            <h3>
              {answer}
            </h3>
            <p className="flashcardButton">Flip</p>
          </div>
        </div>
      </div>
      <div className="nav-buttons">
        <Button onClick={handleClickTrue} color="green">
          Got it!
          {' '}
          <ToastContainer />
          <Icon name="check" />
        </Button>
        <Button onClick={handleClickFalse} color="red">
          Not yet!
          {' '}
          <ToastContainer />
          <Icon name="close" />
        </Button>
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Flashcard;
