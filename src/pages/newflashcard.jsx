import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Container,
} from 'semantic-ui-react';
import flashcardActions from '../redux/flashcardActions';
import '../styles/newflashcard.css';

const CreateFlashcardPage = () => {
  const flashcard = useSelector(state => state.flashcards, shallowEqual) || [];
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(flashcardActions.SaveFlashcard(flashcard));
  // }, [dispatch, flashcard]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(flashcardActions.SaveFlashcard(flashcard));
  };
  return (
    <Container>
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="login-column">
          <Header as="h2" className="main-text" textAlign="center">
            Create flashcard - theme
          </Header>
          <Form className="createFlashcardForm" size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                id="form-input-control-email"
                fluid
                type="text"
                name="text"
                value="Theme"
                // onChange={handleChange}
                placeholder="Theme"
                label="Theme"
                // className="login-input"
                required
              />
              <Form.Input
                id="form-input-control-email"
                fluid
                icon="sticky note outline"
                iconPosition="left"
                type="text"
                name="text"
                // onChange={handleChange}
                placeholder="Front"
                label="Front"
                // className="login-input"
                required
              />
              <Form.Input
                id="form-input-control-password"
                fluid
                icon="sticky note"
                iconPosition="left"
                type="text"
                name="text"
                // onChange={handleChange}
                placeholder="Back"
                label="Back"
                // className="login-input"
                required
              />
              <Button className="add-button" fluid size="large" type="submit">
                Add
              </Button>
              <Button className="finish-button" fluid size="large" type="submit">
                Finish
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CreateFlashcardPage;
