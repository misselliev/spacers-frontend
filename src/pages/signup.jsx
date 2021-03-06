/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import userActions from '../redux/userActions';
import '../styles/signup.css';

const SignupPage = props => {
  const dispatch = useDispatch();

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = e => setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUser(signupForm));
    history.push('/');
  };

  const {
    email, password, password_confirmation,
  } = signupForm;
  return (
    <Grid textAlign="center" className="middle aligned wall signup">
      <Grid.Column className="signup-column">
        <Header as="h2" className="main-text" textAlign="center">
          <Icon name="user" />
          Create your account
        </Header>
        <Form className="signupForm" size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              id="form-input-control-email"
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              label="Email"
              style={{ marginBottom: '1em' }}
              required
            />
            <Form.Input
              id="form-input-control-password"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              label="Password"
              style={{ marginBottom: '1em' }}
              required
            />
            <Form.Input
              id="form-input-control-password-confirmation"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              value={password_confirmation}
              onChange={handleChange}
              name="password_confirmation"
              placeholder="Password confirmation"
              label="Password confirmation"
              style={{ marginBottom: '1em' }}
              required
            />
            <Button className="form-button" fluid size="large" type="submit">
              Signup
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

SignupPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SignupPage;
