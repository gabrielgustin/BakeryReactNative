import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import CategoriesScreen from '../screens/CategoriesScreen'
import DetailScreen from '../screens/DetailScreen'
import ProductsScreen from '../screens/ProductsScreen'
import { COLORS } from "../constants/colors"

const Stack = createNativeStackNavigator()

export default ShopNavigator=()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                 headerStyle: {backgroundColor: COLORS.primary},
                 headerTintColor: COLORS.secondary,
                 headerTitleStyle: {
                    fontWeight: 'bold',
                 },
            }}
        >
                <Stack.Screen name="Categories"component={CategoriesScreen} options={{
                    title: 'Mi Panaderia',
                }} />
                <Stack.Screen name="Products" component={ProductsScreen} options={({route}) => ({
                    title: route.params.title
                })} />
                <Stack.Screen name="Deails" component={DetailScreen} options={{
                    title: 'Detalles'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}