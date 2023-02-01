import React,{useReducer} from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";

const INCREMENT_VALUE = 1

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase_counter':
            return {...state, counter: state.counter + action.payload}

        case 'decrease_counter':
            return {...state, counter: state.counter + action.payload}
    
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const {counter} = state

    return (<View>
        <Button title = "Increase" onPress={() => {
            dispatch({type: 'increase_counter', payload: INCREMENT_VALUE})
        }}/>
        <Button title = "Decrease" onPress={() => {
            dispatch({type: 'decrease_counter', payload: -1 * INCREMENT_VALUE})
        }}/>
        <Text>Current Count: {counter}</Text>
    </View>)
}

const styles = StyleSheet.create({})

export default CounterScreen