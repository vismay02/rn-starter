import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const listScreen = () => {
    const friends = [
        {name: 'Baba', age: 34},
        {name: 'Vishal', age: 35},
        {name: 'Yash', age: 30},
        {name: 'Adi', age: 26},
        {name: 'Mihir', age: 24},
        {name: 'Sakshas', age: 23},
        {name: 'Nimeesh', age: 24},
        {name: 'Abu', age: 34},
    ]
    return(
        <FlatList
        //Doesn't need modification to original object
        keyExtractor={(friend) => friend.name}
         data={friends} 
         renderItem={({item}) => {
            // element  === {item: {name: 'Baba'}, index: 0}
            //item === {name: 'Baba'}
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
         }}/>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 30
    },
    marginHori:{
        marginHorizontal: 20
    }
})

export default listScreen