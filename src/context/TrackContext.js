import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};

const createTrack = dispatch => () => {};

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
