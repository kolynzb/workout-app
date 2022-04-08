import { StyleSheet, View } from "react-native";
import React from "react";
import Mtext from "../components/styled/Mtext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};
const WorkoutDetailScreen = ({
  route,
}: NativeStackHeaderProps & DetailParams) => {
  return (
    <View style={styles.container}>
      <Mtext style={styles.header}>Slug - {route.params.slug}</Mtext>
    </View>
  );
};

export default WorkoutDetailScreen;

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
