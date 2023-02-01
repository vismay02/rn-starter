import { useState } from "react";
import {StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    const [passowrd, setpassword] = useState('')

    return <View>
        <Text>Enter Passowrd:</Text>
      <TextInput 
      style = {styles.input}
      autoCorrect = {false} 
      autoCapitalize="none"
      value={passowrd}
      onChangeText={ (newValue) => {
        setpassword(newValue) 
      }}
      />
    {
    passowrd.length < 5 && passowrd.length > 0 ? 
    <Text>Passowrd must be more than 5 characters</Text> 
    :<Text>Your Passowrd is: {passowrd}</Text>
    }
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        padding: 4
    }
})

export default TextScreen