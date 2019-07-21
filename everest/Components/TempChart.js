import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button,Dimensions,FlatList,TouchableOpacity,TouchableHighlight} from 'react-native'
import { LineChart } from 'react-native-line-chart'

export default class TempChart extends React.Component {

  render() {
    return(


<View>
<Text style ={{marginBottom:20}}> Temperature Graph </Text>
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
    height={400}
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





          </View>
          )
        }
      }