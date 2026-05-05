import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
     <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
     </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
