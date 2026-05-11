import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { View, Text } from "react-native";
import { HomeStackParamList } from "../types/navigation";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator<HomeStackParamList>();



const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;