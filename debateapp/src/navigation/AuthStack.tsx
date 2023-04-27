import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Siginin from "../pages/Siginin";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Siginin" component={Siginin} />
    </Stack.Navigator>
  );
}
