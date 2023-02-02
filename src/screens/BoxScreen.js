import { useState } from "react";
import {StyleSheet, Text, TextInput, View } from "react-native";

const BoxScreen = () => {

    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        alignItems:"stretch",
        flexDirection:"column",
        height:200,
        justifyContent:"space-evenly"
    },
    textOneStyle: {
        borderColor: 'red',
        borderWidth: 3,
        flex:4,
        alignSelf:"flex-start"
      },
      textTwoStyle: {
        borderColor: 'red',
        borderWidth: 3,
        flex:4,
        position:'absolute',
        fontSize:28
          },
      textThreeStyle: {
        borderColor: 'red',
        borderWidth: 3,
        flex:2,
        alignSelf:"flex-end"
      }
})

export default BoxScreen