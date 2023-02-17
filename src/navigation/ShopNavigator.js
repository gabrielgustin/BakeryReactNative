import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import CategoriesScreen from '../screens/CategoriesScreen'
import DetailScreen from '../screens/DetailScreen'
import ProductsScreen from '../screens/ProductsScreen'

const Stack = createNativeStackNavigator()

export default ShopNavigator=()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories" >
                <Stack.Screen name="Categories"component={CategoriesScreen} />
                <Stack.Screen name="Products" component={ProductsScreen} />
                <Stack.Screen name="Deails" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}