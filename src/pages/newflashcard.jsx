import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Container,
} from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import flashcardActions from '../redux/flashcardActions';
import '../styles/newflashcard.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navbar';

const CreateFlashcardPage = () => {
  const [flashcard, setFlashcard] = useState({
    front: '',
    back: '',
  });
  const user = useSelector(state => state.user);
  const nav = Object.keys(user).length === 0 ? (<Navbar />) : <div />;

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

  const resetingForm = () => {
    document.getElementById('form-input-front').value = '';
    document.getElementById('form-input-back').value = '';
  };
  const handleSubmit = e => {
    e.preventDefault();
    const result = [];
    result.push(flashcard);
    dispatch(flashcardActions.SaveFlashcard(result));
    notify();
    resetingForm();
  };

  return (
    <Container>
      {nav}
      <Grid textAlign="center" className="middle aligned wall login">
        <Grid.Column className="login-column">
          <Header as="h2" className="main-text" textAlign="center">
            Create flashcard
          </Header>
          <Form id="createFlashcardForm" className="createFlashcardForm" size="large" onSubmit={handleSubmit}>
            <Segment stacked id="form-input">
              <Form.Input
                id="form-input-front"
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
                id="form-input-back"
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
