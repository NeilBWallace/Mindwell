import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home';
import Introduction from './app/components/Introduction/Introduction';
import Guided from './app/components/Guided/Guided';
import Breathing from './app/components/Breathing/Breathing';
import More from './app/components/More/More';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: Home },
  Introduction : {screen: Introduction},
 Guided: {screen: Guided},
Breathing : {screen :Breathing},
More : {screen : More},
});
export default App;
