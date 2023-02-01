import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const ImageDetailscreen = ({ImageSrc, ImageTitle, ImageScore}) => {
    return <View>
        <Image source={ImageSrc}/>
        <Text>{ImageTitle}</Text>
        <Text>ImageScore - {ImageScore}</Text>
        </View>
}

const styles = StyleSheet.create({

})

export default ImageDetailscreen