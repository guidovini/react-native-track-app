import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {};

const initialValue = {
  isSignedIn: false
};

export const { Provider, Context } = createDataContext(
  authReducer,
  actions,
  initialValue
);
