import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data/data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import useCachedResources from "../hooks/useCachedResources";
import Mtext from "../components/styled/Mtext";
import Navigation from "../navigation";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <View style={styles.container}>
        <Mtext style={styles.header}>New Workouts</Mtext>
        <FlatList
          data={data as Array<Workout>}
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
  } else {
    return null;
  }
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
