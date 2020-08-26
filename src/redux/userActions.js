import axios from 'axios';

const setUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

const clearUser = () => ({
  type: 'CLEAR_USER',
});

const registerUser = userObj => ({
  type: 'NEW_USER',
  payload: userObj,
});

const loginUser = userObj => dispatch => {
  axios.post('https://spacer-repetition-api.herokuapp.com/v1/login', userObj).then(res => {
    dispatch(setUser(res.data));
    localStorage.setItem('user', JSON.stringify(res.data));
  }).catch(error => {
    throw (error);
  });
};

const logoutUser = () => dispatch => {
  dispatch(clearUser());
  localStorage.clear();
};

const newUser = userObj => dispatch => {
  axios.post('https://spacer-repetition-api.herokuapp.com/v1/', userObj).then(res => {
    dispatch(registerUser(res.data.data));
  }).catch(error => {
    throw (error);
  });
};

export default {
  loginUser,
  logoutUser,
  newUser,
};
