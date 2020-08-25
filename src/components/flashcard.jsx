import React, { useEffect } from 'react';
import {
  Button, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/flashcard.css';

const Flashcard = ({ id, question, answer }) => {
  useEffect(() => {
    const card = document.getElementById('card');
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }, []);

  return (
    <div className="main-card" key={id}>
      <h3 className="main-text">Question of the day</h3>
      <div className="scene scene-card">
        <div id="card" className="card">
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
        <Button color="green">
          Got it!
          {' '}
          <Icon name="check" />
        </Button>
        <Button color="red">
          Not yet!
          {' '}
          <Icon name="close icon" />
        </Button>
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Flashcard;
