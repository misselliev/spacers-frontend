import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Segment, Grid, Container,
} from 'semantic-ui-react';
import flashcardActions from '../redux/flashcardActions';
import Flashcard from '../components/flashcard';

const NewFlashcard = () => {
  const flashcards = useSelector(state => state.flashcards, shallowEqual) || [];
  // const user = useSelector(state => state.user.currentUser) || {};
  // const userToken = user.token;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flashcardActions.fetchCards());
  }, [dispatch]);

  return (
    <Container>
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="flashcard-column">
          <Segment raised>
            {flashcards.map(({ id, question, answer }) => (
              <Flashcard key={id} question={question} answer={answer} />
            ))}
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default NewFlashcard;
