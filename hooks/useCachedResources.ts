import { useState, useEffect } from "react";
import * as Font from "expo-font";
import data from "../data/data.json";
import { clearWorkouts, getWorkouts, initWorkout } from "../storage/workout";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourceDataAsync() {
      try {
        await clearWorkouts();
        await initWorkout();

        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
          "montserrat-variable": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        });
      } catch (err) {
        console.warn(err);
      } finally {
        await getWorkouts();
        setIsLoadingComplete(true);
      }
    }
    loadResourceDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
