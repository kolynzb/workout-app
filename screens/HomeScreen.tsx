import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to planner"
        onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
