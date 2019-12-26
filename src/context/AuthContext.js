import { AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case 'SIGNUP':
    case 'SIGNIN':
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

    // Navigate to mainFlow or TrackList
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with sign up'
    });
  }

  // if we sign up, modify our state, and say that we are authenticated
  // if signing up fails, we probably need to reflect and error message somewhere
};

const signin = dispatch => async ({ email, password }) => {
  // Try to signin
  try {
    // Handle success by updating state
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SIGNIN', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    // Handle failure by showing error message (somehow)
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with sign in'
    });
  }
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
