/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Dimensions,TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import { LineChart } from 'react-native-line-chart';
import Home from './Components/Home';
import TempChart from './Components/TempChart';
import HumChart from './Components/HumChart';
import Main from './Components/Main'  ;                                                                                                                   nents/Main';

export default createAppContainer(createStackNavigator(
  {
    Home:Home,
    TempChart:TempChart,
    HumChart:HumChart,
    Main:Main
    
    
  },
  {
    initialRouteName: 'Main',
    
    },

)
);