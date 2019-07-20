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
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

const App = () => {
  return (
    <Fragment>
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
             
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingLeft: 5 }}>
        <Text> Temp </Text>
           <AnimatedCircularProgress
  size={100}
  width={6}
  fill={3}
  tintColor="red"
  backgroundColor="#3d5875">
  {
    (fill) => (
      <Text>
        { 3}
      </Text>
    )
  }
</AnimatedCircularProgress>
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
        <Text>humidity </Text>
           <AnimatedCircularProgress
  size={100}
  width={6}
  fill={3}
  tintColor="red"
  backgroundColor="#3d5875">
  {
    (fill) => (
      <Text>
        { 3}
      </Text>
    )
  }

</AnimatedCircularProgress>
        </View>
        
      </View>
            </View>
         
    <Progress.Bar progress={4} width={30} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
