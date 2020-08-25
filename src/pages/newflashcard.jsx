import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Container,
} from 'semantic-ui-react';
import flashcardActions from '../redux/flashcardActions';
import '../styles/newflashcard.css';

const CreateFlashcardPage = () => {
  const [flashcard, setFlashcard] = useState({
    front: '',
    back: '',
  });
  const dispatch = useDispatch();
  const handleChange = e => setFlashcard({ ...flashcard, [e.target.name]: e.target.value });
  const { front, back } = flashcard;

  const handleSubmit = e => {
    e.preventDefault();
    const result = [];
    result.push(flashcard);
    dispatch(flashcardActions.SaveFlashcard(result));
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
                icon="sticky note outline"
                iconPosition="left"
                type="text"
                name="front"
                value={front}
                onChange={handleChange}
                placeholder="Front"
                label="Front"
                required
              />
              <Form.Input
                id="form-input-control-password"
                fluid
                icon="sticky note"
                iconPosition="left"
                type="text"
                name="back"
                value={back}
                onChange={handleChange}
                placeholder="Back"
                label="Back"
                required
              />
              <Button className="form-button" fluid size="large" type="submit">
                Add
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CreateFlashcardPage;
