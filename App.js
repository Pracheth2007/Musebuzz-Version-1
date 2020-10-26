import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import PianoScreen from './screens/PianoScreen';
import GuitarScreen from './screens/GuitarScreen';
import DrumsScreen from './screens/DrumsScreen';
import ViolinScreen from './screens/ViolinScreen';
import PianoLiveScreen from './screens/PianoLiveScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  HomeScreen: HomeScreen,
  PianoScreen: PianoScreen,
  GuitarScreen: GuitarScreen,
  DrumsScreen: DrumsScreen,
  ViolinScreen: ViolinScreen,
  PianoLiveScreen: PianoLiveScreen,
});

const AppContainer = createAppContainer(AppNavigator);
