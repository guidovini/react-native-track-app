import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const startRecording = (dispatch = () => {});

const stopRecording = (dispatch = () => {});

const addLocation = (dispatch = () => {});

const actions = {
  startRecording,
  stopRecording,
  addLocation
};

const initialValue = {
  recording: false,
  locations: [],
  currentLocation: null
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  actions,
  initialValue
);
