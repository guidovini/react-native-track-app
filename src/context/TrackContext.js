import createDataContext from './createDataContext';

import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};

const createTrack = dispatch => (name, locations) => {
  // make a request to our api
  console.log(name, locations.length);
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
