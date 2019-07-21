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
import { LineChart } from 'react-native-line-chart'

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
        <TouchableOpacity activeOpacity = { .5 } onPress ={()=>{alert('sth')}}>
     
        
        
           <AnimatedCircularProgress
  size={180}
  width={15}
  fill={3}
  tintColor="red"
  backgroundColor="#3d5875">
  {
    (fill) => (
      <Text>
        { 3}°C
      </Text>
    )
  }

</AnimatedCircularProgress>
</TouchableOpacity>
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
        
           <AnimatedCircularProgress
  size={180}
  width={15}
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
         
    <Progress.Bar style ={{marginTop:40}} progress={10} width={100} height={20} />
    <Text style ={{marginTop:20}}> Temp </Text>
<LineChart
    data={{
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

  <Text> Humidity </Text>

<LineChart
    data={{
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />



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
