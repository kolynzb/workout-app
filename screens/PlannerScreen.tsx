import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button title="GO to hOME" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default PlannerScreen;
