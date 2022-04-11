
import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workout";
import { Workout } from "../types/data";
import { useIsFocused } from "@react-navigation/native";

export const useWorkouts = (): Workout[] => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused &&
      (async () => {
        setWorkouts(await getWorkouts());
      })();
  }, [isFocused]);
  return workouts;
};
