import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      // options={{ unmountOnBlur: true }} unmounts when you leave tha page
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Planner"
      component={PlannerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="add-to-list" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
const Stack = createNativeStackNavigator();
const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({});
