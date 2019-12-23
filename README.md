## React Native - Tracks App

### Install `react-navigation`

`npm install react-navigation`

`npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs`

Imports

```js
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
```

### Install react-native-elements

`npm install react-native-elements`

### Install axios

`npm install axios`

### Install ngrok globally

`npm install -g ngrok`

To use it:
`ngrok http 3000`

To solve some errors, use instead:
`ngrok.cmd http 3000`
