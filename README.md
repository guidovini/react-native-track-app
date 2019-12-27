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

## AsyncStorage

`setItem(key, value)` - Stores information on the user's device
`getItem(key)` - Retrieves an item that has been stored
`removeItem(key)` - Remove some stored information

## React Native Maps

`npx expo-cli install react-native-maps`

Import

```js
import MapView from 'react-native-maps';

<MapView
  style={styles.map}
  initialRegion={{
    latitude: 37.33233,
    longitude: -122.03121,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }}
/>;
```

- Polyline

## `expo-location`

`npx expo-cli install expo-location`

```js
import { requestPermissionsAsync } from 'expo-location';
```

---

## Important concepts

- `withNavigation()`
- `navigation.addListener('didFocus', () => {})`
- NavigationEvents

```js
<NavigationEvents
  onWillFocus={() => {}} // Navigate to a screen. Instant the button it is pressed.
  onDidFocus={() => {}} // Navigate to a screen. When I land into the screen.
  onWillBlur={() => {}} // When I am about to navigate away from the screen
  onDidBlur={() => {}} // When the transition completes. BUGGY!
/>
```

- `SafeAreaView`

```js
<SafeAreaView forceInset={{ top: 'always' }}>...</SafeAreaView>
```
