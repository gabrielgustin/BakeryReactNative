import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button title='Go To Products' onPress={() => navigation.navigate('Products')} color='blue' />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})