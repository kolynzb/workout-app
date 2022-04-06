import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Workout } from "../types/data";
import Mtext from "./styled/Mtext";

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View style={styles.container}>
      <Mtext style={styles.name}>{item.name}</Mtext>
      <Mtext style={styles.duration}>Duration: {item.duration}</Mtext>
      <Mtext style={styles.difficulty}>Difficulty: {item.difficulty}</Mtext>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0,0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: { fontSize: 15 },
  difficulty: { fontSize: 15 },
});
export default WorkoutItem;
