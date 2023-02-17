import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const [fonstLoaded] = useFonts({
    DancingScripts: require('./src/assets/fonts/DancingScript-Regular.ttf')
  })
  if (!fonstLoaded){
    return null
  }

  return (
    <ShopNavigator/>
  );
}

