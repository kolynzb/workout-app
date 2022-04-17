import { Button, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Mtext from "../components/styled/Mtext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutsBySlug";
import PresssabbleText from "../components/styled/PresssabbleText";
import Modal from "../components/styled/Modal";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types/data";
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
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  // const [countDown, setCountDown] = useState<number>(-1);
  const [trackerIdx, setTrackerIdx] = useState<number>(-1);

  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, workout!.sequence[idx]]);
    setTrackerIdx(idx);
  };

  useEffect(() => {
    if (trackerIdx == -1) {
    }
    console.log("Tracker has been changed");
  }, [trackerIdx]);

  return (
    <View style={styles.container}>
      {/* <Mtext style={styles.header}>{workout?.name}</Mtext> */}
      {workout && (
        <WorkoutItem item={workout} childStyles={{ marginTop: 10 }}>
          <Modal
            activator={({ handleOpen }) => (
              <PresssabbleText text="Check Sequence" onPress={handleOpen} />
            )}
          >
            <View>
              {workout?.sequence.map((si, idx) => (
                <View key={si.slug} style={styles.sequenceItem}>
                  <Mtext>
                    {si.name} | {si.type} | {formatSec(si.duration)}
                  </Mtext>

                  {idx !== workout.sequence.length - 1 && (
                    <FontAwesome name="arrow-down" size={20} />
                  )}
                </View>
              ))}
            </View>
          </Modal>
        </WorkoutItem>
      )}
      <View>
        {sequence.length === 0 && (
          <FontAwesome
            name="play-circle-o"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
        )}
      </View>
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
  sequenceItem: {
    alignItems: "center",
  },
});
