import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ImageDetails from "./components/ImageDetails"

const ImageScreen = () => {
    return <View>
     <ImageDetails ImageTitle="Forest" ImageSrc={require('../../assets/forest.jpg')}
     ImageScore='9'/>
     <ImageDetails ImageTitle="Beach" ImageSrc={require('../../assets/beach.jpg')}
     ImageScore='10'/>
     <ImageDetails ImageTitle="Mountain" ImageSrc={require('../../assets/mountain.jpg')}
     ImageScore='8'/>
     </View>
}

const styles = StyleSheet.create({

})

export default ImageScreen