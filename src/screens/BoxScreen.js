import { useState } from "react";
import {StyleSheet, Text, TextInput, View } from "react-native";

const BoxScreen = () => {

    return <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoStyle}/>
        <View style={styles.viewThreeStyle}/>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        height:100,
        borderColor:'black',
        alignItems:"stretch",
        flexDirection:"row",
        justifyContent:'space-between'
    },
    viewOneStyle: {
        backgroundColor: 'red',
        width:50,
        height:50,
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        width:50,
        height:50,
        alignSelf:'flex-end'    
    },
    viewThreeStyle: {
        backgroundColor: 'blue',
        width:50,
        height:50
    },
    textOneStyle: {
        borderColor: 'red',
        borderWidth: 3,
        flex:1,
      },
      textTwoStyle: {
        borderColor: 'red',
        borderWidth: 3,
        flex:1,
        fontSize:18,
       ...StyleSheet.absoluteFillObject
          },
      textThreeStyle: {
        borderColor: 'red',
        borderWidth: 3,
        flex:1,
      }
})

export default BoxScreen