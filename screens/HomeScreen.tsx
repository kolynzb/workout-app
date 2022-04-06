import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data/data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>Home Guy</Text>
      <FlatList
        data={data as Array<Workout>}
        renderItem={WorkoutItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
