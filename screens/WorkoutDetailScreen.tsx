import { Modal, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Mtext from "../components/styled/Mtext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutsBySlug";
import PresssabbleText from "../components/styled/PresssabbleText";
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
  const workout = useWorkoutBySlug(route.params.slug);
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Mtext style={styles.header}>{workout?.name}</Mtext>
      <PresssabbleText
        text="Check Sequence"
        onPress={() => setShowModal(true)}
      />
      <Modal visible={showModal} transparent={false} animationType="fade">
        <View style={styles.centerView}>
          <Mtext>Hello</Mtext>
          <PresssabbleText text="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
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
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
