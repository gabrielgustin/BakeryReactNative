import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const ProductsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
      <Button title='Go To Deails' onPress={() => navigation.navigate('Deails')} color='red'/>
      <Button title='Go Back' onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})