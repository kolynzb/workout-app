import { useEffect, useState } from "react";
import { getWorkoutBySlug } from "../storage/workout";
import { Workout } from "../types/data";

export const useWorkoutBySlug = (slug: string): Workout | undefined => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    (async () => {
      setWorkout(await getWorkoutBySlug(slug));
    })();
  }, []);
  return workout;
};
