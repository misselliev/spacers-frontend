import React, { useEffect } from 'react';
import {
  Card, Segment, Button, Icon, Container,
} from 'semantic-ui-react';
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
    <Container>
      <Segment raised>
        <div id="card" className="flip-container animated flashcard flipInx">
          <Card id="card-front" className="flip-card-front on">
            <Card.Content>
              <Card.Header>
                Questiondfghjklm-ghgvjbknlm,gfhjcbklvd
              </Card.Header>
            </Card.Content>
          </Card>
          <Card id="card-back" className="flip-card-back off">
            <Card.Content>
              <Card.Header>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Card.Header>
            </Card.Content>
          </Card>
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
