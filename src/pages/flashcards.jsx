import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Segment, Grid, Container,
} from 'semantic-ui-react';
import flashcardActions from '../redux/flashcardActions';
import Flashcard from '../components/flashcard';
import Navbar from '../components/navbar';
import '../styles/flashcards.css';

const NewFlashcard = () => {
  const flashcards = useSelector(state => state.flashcards.flashcards) || [];
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const nav = Object.keys(user).length === 0 ? (<Navbar />) : <div />;
  useEffect(() => {
    dispatch(flashcardActions.fetchFlashcards());
  }, [dispatch]);
  return (
    <Container>
      {nav}
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="flashcard-column">
          <Segment raised className="flashcard-segment">
            {flashcards.map(({ id, front, back }) => (
              <Flashcard key={id} id={id} question={front} answer={back} />
            ))}
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default NewFlashcard;
