import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({navigation}) => {
  return<View>
 <Text style={styles.text}>Hello world!</Text>
 <Button
 onPress={() => navigation.navigate('Component')} 
 title="Go to Component Screen"/>
  <Button
 onPress={() => navigation.navigate('Image')} 
 title="Go to Image Screen"/>
   <Button
 onPress={() => navigation.navigate('List')} 
 title="Go to List Screen"/>
    <Button
 onPress={() => navigation.navigate('Counter')} 
 title="Go to Counter Screen"/>
    <Button
 onPress={() => navigation.navigate('Color')} 
 title="Go to Color Screen"/>
     <Button
 onPress={() => navigation.navigate('Square')} 
 title="Go to Square Screen"/>
 <Button
 onPress={() => navigation.navigate('Text')} 
 title="Go to Text Screen"/>
 <TouchableOpacity onPress={() => navigation.navigate('List')}>
  <Text>Go to List Screen</Text>
 </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonMargin: {
    marginTop: 50,
  },
})

export default HomeScreen