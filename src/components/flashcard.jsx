import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import './flashcard.css';

const Flashcard = () => {
  useEffect(() => {
    const cardFront = document.getElementById('card-front');
    const cardBack = document.getElementById('card-back');
    const card = document.getElementById('card');

    card.addEventListener('click', () => {
      if (!cardFront.classList.contains('on')) {
        cardFront.classList.remove('off');
        cardFront.classList.add('on');
        cardBack.classList.remove('on');
        cardBack.classList.add('off');
      } else {
        cardBack.classList.remove('off');
        cardBack.classList.add('on');
        cardFront.classList.remove('on');
        cardFront.classList.add('off');
      }
    });
  }, []);

  return (
    <div id="card" className="flip-container">
      <Card id="card-front" className="flip-card-front on">
        <Card.Content>
          <Card.Header>
            Question
          </Card.Header>
        </Card.Content>
      </Card>
      <Card id="card-back" className="flip-card-back off">
        <Card.Content>
          <Card.Header>
            Answer
          </Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Flashcard;
