import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment,
} from 'semantic-ui-react';
// import userActions from '../redux/userActions';

const CreateFlashcardPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
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
              value="Back"
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
              value="Back"
              // onChange={handleChange}
              placeholder="Back"
              label="Back"
              // className="login-input"
              required
            />
            <Button className="add-button" fluid size="large" type="submit">
              Edit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default CreateFlashcardPage;
