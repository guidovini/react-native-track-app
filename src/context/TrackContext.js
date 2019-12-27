import createDataContext from './createDataContext';

import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TRACKS':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'FETCH_TRACKS', payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
  // make a request to our api
  await trackerApi.post('/tracks', { name, locations });
};

const actions = {
  fetchTracks,
  createTrack
};

const initialValue = [];

export const { Provider, Context } = createDataContext(
  trackReducer,
  actions,
  initialValue
);
