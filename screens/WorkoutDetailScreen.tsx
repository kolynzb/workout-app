import { Button, StyleSheet, View } from "react-native";
import React from "react";
import Mtext from "../components/styled/Mtext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutsBySlug";
import PresssabbleText from "../components/styled/PresssabbleText";
import Modal from "../components/styled/Modal";
import { formatSec } from "../utils/time";
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
  return (
    <View style={styles.container}>
      <Mtext style={styles.header}>{workout?.name}</Mtext>
      <Modal
        activator={({ handleOpen }) => (
          <PresssabbleText text="Check Sequence" onPress={handleOpen} />
        )}
      />
      <Modal
        activator={({ handleOpen }) => (
          <Button title="Check Sequence" onPress={handleOpen} />
        )}
      />
      <Modal
        activator={({ handleOpen }) => (
          <PresssabbleText text="Check Sequence" onPress={handleOpen} />
        )}
      >
        <View>
          {workout?.sequence.map((si) => (
            <Mtext key={si.slug}>
              {si.name} | {si.type} | {formatSec(si.duration)}
            </Mtext>
          ))}
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
});
