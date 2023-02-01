import React from "react"
import { Text, StyleSheet, View } from "react-native"

const componentScreen = () => {
    const name='Vismay'
    const greetingsHello = <Text>Hello! how are you?</Text>

    return(
    <View>
     <Text style={styles.subHeaderStyle}>Getting started with react native!</Text>
     <Text style={{fontSize:20}}>{name}</Text>
     <Text style={styles.nameStyle}>My name is {name}</Text>
        {greetingsHello}
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
})

export default componentScreen