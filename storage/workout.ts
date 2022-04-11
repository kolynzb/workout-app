import { containsKey, getData, removeItem, storeData } from ".";
import { Workout } from "../types/data";
import data from "../data/data.json";

export const getWorkouts = async (): Promise<Workout[]> =>
  await getData("workout-data");

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getWorkouts();
  const workout = workouts.filter((w) => w.slug === slug)[0];
  return workout;
};
export const initWorkout = async (): Promise<Boolean> => {
  const hasWorkouts = await containsKey("workout-data");
  if (!hasWorkouts) {
    await storeData("workout-data", data);
    return true;
  }
  return false;
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
