import { View, Text } from "react-native";
import React from "react";
import { Workout } from "../types/data";

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
      <Text>{item.duration}</Text>
    </View>
  );
};

export default WorkoutItem;
