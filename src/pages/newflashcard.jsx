import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Container,
} from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import flashcardActions from '../redux/flashcardActions';
import '../styles/newflashcard.css';
import 'react-toastify/dist/ReactToastify.css';

const CreateFlashcardPage = () => {
  const [flashcard, setFlashcard] = useState({
    front: '',
    back: '',
  });
  const dispatch = useDispatch();
  const handleChange = e => setFlashcard({ ...flashcard, [e.target.name]: e.target.value });
  const { front, back } = flashcard;

  const notify = () => toast('🦄 Card Added!', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const handleSubmit = e => {
    e.preventDefault();
    const result = [];
    result.push(flashcard);
    dispatch(flashcardActions.SaveFlashcard(result));
    notify();
    document.getElementById('createFlashcardForm').reset();
  };

  return (
    <Container>
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="login-column">
          <Header as="h2" className="main-text" textAlign="center">
            Create flashcard
          </Header>
          <Form id="createFlashcardForm" className="createFlashcardForm" size="large" onSubmit={handleSubmit}>
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
            <ToastContainer />
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CreateFlashcardPage;
