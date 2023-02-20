import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={{...styles.categoriesItem, ...{backgroundColor: item.color}}}>

        <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>

            <View style={styles.textContainer} >
                <Text>{item.title}</Text>
            </View>

            <View style={styles.imageContainer} >
                <Image style={styles.image} source={{ uri: item.img}}/>
            </View>

        </TouchableOpacity>

    </View>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
    categoriesItem: {
        flex: 1,
        borderRadius: 15,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15
    },  
    textContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '40%',
        height: '100%',
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderBottomRightRadius: 10
    }
})