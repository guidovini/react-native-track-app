import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case 'SIGNUP':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  // make api request to sign up with that email and password
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SIGNUP', payload: response.data.token });
  } catch (err) {
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with sign up'
    });
  }

  // if we sign up, modify our state, and say that we are authenticated
  // if signing up fails, we probably need to reflect and error message somewhere
};

const signin = dispatch => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  };
};

const signout = dispatch => {
  return () => {
    // somehow sign out
  };
};

const actions = {
  signup,
  signin,
  signout
};

const initialValue = {
  token: null,
  errorMessage: ''
};

export const { Provider, Context } = createDataContext(
  authReducer,
  actions,
  initialValue
);
