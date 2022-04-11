import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import useCachedResources from "../hooks/useCachedResources";
import Mtext from "../components/styled/Mtext";
import Navigation from "../navigation";

import { useWorkouts } from "../hooks/useWorkouts";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();
  return (
    <View style={styles.container}>
      <Mtext style={styles.header}>New Workouts</Mtext>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutDetail", { slug: item.slug })
            }
          >
            <WorkoutItem item={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "montserrat-bold",
  },
});
