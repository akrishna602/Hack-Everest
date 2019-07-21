import React from 'react'
import { StyleSheet, Platform,Alert, Image, Text, View ,Button,Dimensions,FlatList,TouchableOpacity} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import  firebase from '.././firebase'
let ref = firebase.database().ref('DHT11')

export default class Home extends React.Component {
  constructor(props){
    super(props);
  this.state = {
   
    humidity :'',
    temperature:'',
    water_level:''
    

    
  };
}

componentDidMount() {
   ref.on('value', (snap) => {
    
    this.setState({
      humidity:snap.val().Humidity,
      temperature:snap.val().Temperature,
      water_level:snap.val().WaterLevel


      
   });
  })
 }


  render() {
    return(

      <View style={ styles.container}>
        <View style={styles.circularContainer}>
          <TouchableOpacity style={styles.circularBar} onPress ={()=>{ this.props.navigation.navigate('TempChart')}}>
            <AnimatedCircularProgress
              size={180}
              width={15}
              fill={this.state.temperature}
              tintColor="red"
              backgroundColor="#3d5875">
              {
                (fill) => (
                  <Text>
                    {this.state.temperature}°C
                  </Text>
                )
              }
            </AnimatedCircularProgress>    
          </TouchableOpacity>

          <TouchableOpacity style={styles.circularBar} onPress ={()=>{ this.props.navigation.navigate('TempChart')}}>
            <AnimatedCircularProgress
              size={180}
              width={15}
              fill={this.state.humidity}
              tintColor="red"
              backgroundColor="#3d5875">
              {
                (fill) => (
                  <Text>
                    {this.state.humidity}% 
                  </Text>
                )
              }
            </AnimatedCircularProgress>    
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <Progress.Bar
            progress={this.state.water_level}*0.1
            style={styles.progressBar}
            height={30}
            width= {300}
            unfilledColor={'white'} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',    
    alignItems: 'center'
  },
  circularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50
  },
  circularBar: {
    // borderWidth: 1,
    marginLeft: 15,
    marginRight: 15
  },
  progressContainer: {
    borderWidth: 1
  },
  progressBar: {
    width: 300,
    // size: 50,
    // height: 50
  }
});
