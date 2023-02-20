import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductsItem = () => {
  return (
    <View style={styles.itemContainer}>
        <View  style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: 'https://vinomanos.com/wp-content/uploads/2021/08/Felipe-portada.jpg'}}/> 
        </View>
        <View  style={styles.textContainer}>
            <Text>Name</Text>
            <Text>Description</Text>
            <Text>Price</Text>
        </View>
    </View>
  )
}

export default ProductsItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        height: '60%'
    },
    textContainer: {
        height: '40%'
    },
    image: {
       height: '100%',
       width: '100%' 
    },

})