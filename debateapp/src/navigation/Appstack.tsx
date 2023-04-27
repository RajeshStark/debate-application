import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/Home/Home";
import MyTabs from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
