import React, { useEffect } from 'react';
import {
  Segment, Button, Icon, Grid, Container,
} from 'semantic-ui-react';
import '../styles/flashcard.css';

const Flashcard = () => {
  useEffect(() => {
    const card = document.getElementById('card');

    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }, []);

  return (
    <Container>
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="flashcard-column">
          <Segment raised>
            <h3 className="main-text">Question of the day</h3>
            <div className="scene scene-card">
              <div id="card" className="card">
                <div className="card-face card-face-front">
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                  <p className="flashcardButton">Flip</p>
                </div>
                <div className="card-face card-face-back">
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
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
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Flashcard;
