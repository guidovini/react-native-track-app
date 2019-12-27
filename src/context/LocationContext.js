import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};

const stopRecording = dispatch => () => {};

const addLocation = dispatch => location => {
  console.log('HI THERE');
  dispatch({ type: 'ADD_CURRENT_LOCATION', payload: location });
};

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
