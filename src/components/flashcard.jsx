import React, { useEffect } from 'react';
import {
  Segment, Button, Icon, Container,
} from 'semantic-ui-react';
import './flashcard.css';

const Flashcard = () => {
  useEffect(() => {

    const card = document.getElementById('card');

    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }, []);

  return (
    <Container>
      <Segment raised>
        <div className="scene scene-card">
          <div id="card" className="card">
            <div className="card-face card-face-front">
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
              <p className="flashcardButton">Flip</p>
            </div>
            <div className="card-face card-face-back">
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
              <p className="flashcardButton">Flip</p>
            </div>
          </div>
        </div>
        <div className="nav-buttons">
          <Button>
            <Icon name="check" />
          </Button>
          <Button>
            <Icon name="close icon" />
          </Button>
        </div>
      </Segment>
    </Container>
  );
};

export default Flashcard;
