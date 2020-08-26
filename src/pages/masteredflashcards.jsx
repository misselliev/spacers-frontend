import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Grid, Segment,
} from 'semantic-ui-react';
import flashcardActions from '../redux/flashcardActions';
import Flashcard from '../components/flashcard';

const MasteredFlashcardPage = () => {
  const masteredFlashcards = useSelector(state => state.flashcards.flashcards) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flashcardActions.fetchMasteredFlashcards());
  }, [dispatch]);

  console.log('mastered cards', masteredFlashcards);

  return (
    <Container>
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="flashcard-column">
          <Segment raised className="flashcard-segment">
            {masteredFlashcards.map(({ id, front, back }) => (
              <Flashcard key={id} id={id} question={front} answer={back} />
            ))}
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MasteredFlashcardPage;
