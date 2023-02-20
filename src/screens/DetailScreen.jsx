import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title='Go to Categories' onPress={()=> navigation.navigate('Categories')}/>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})