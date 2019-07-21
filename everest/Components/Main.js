
import React from 'react'
import { StyleSheet,ScrollView, Platform,Alert, Image, Text, View ,Button,Dimensions,FlatList,TouchableOpacity} from 'react-native'


class Main extends React.Component {
 render() {
   return (
     <View>
       <View>
         <Text>Header</Text>
       </View>
       <ScrollView>
         <Button title=" SEE Nodes Data" onPress ={()=>{ this.props.navigation.navigate('Main')}} />
         <Button title=" query" />
         

       </ScrollView>
       <View>
         <Text>CopyRight @ Avartan </Text>
       </View>
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
  flex:1,
   backgroundColor: "#fff"
 },
 header: {
   backgroundColor: "#c0392b",                                                                                                          ",
   height: 56,
   paddingTop: 10
 },
 headerText: {
   color: "red",
   fontSize: 18,
   fontWeight: 600
 },
 content: {
   backgroundColor: "white",
   padding: 20,
 },
 footer: {
   backgroundColor: "#c0392b ",
   height: 70
 },
 footerText: {
   color: "#fff",
   fontSize: 16
 }
});