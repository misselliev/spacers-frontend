import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Grid, Segment, Header, Icon,
} from 'semantic-ui-react';
import flashcardActions from '../redux/flashcardActions';
import Flashcard from '../components/flashcard';
import Navbar from '../components/navbar';
import '../styles/masteredflashcards.css';

const MasteredFlashcardPage = () => {
  const masteredFlashcards = useSelector(state => state.flashcards.flashcards) || [];
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const nav = Object.keys(user).length === 0 ? (<Navbar />) : <div />;
  console.log(masteredFlashcards);
  const msg = masteredFlashcards.length === 0 ? (
    <div className="header-msg">
      <Header as="h2" icon>
        <Icon name="pencil" />
        You have no mastered flashcards right now.
      </Header>
    </div>
  ) : null;
  useEffect(() => {
    dispatch(flashcardActions.fetchMasteredFlashcards());
  }, [dispatch]);

  return (
    <Container>
      {nav}
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="flashcard-column">
          <Segment raised className="flashcard-segment">
            {msg}
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
