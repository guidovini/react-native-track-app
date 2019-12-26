import { NavigationActions } from 'react-navigation';

let navigator;

// Clever function to get access to navigator
export const setNavigator = nav => {
  navigator = nav;
};

// navigate function for everyone else to use
export const navigate = (routeName, params) => {
  // navigator internal API has a dispatch
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
