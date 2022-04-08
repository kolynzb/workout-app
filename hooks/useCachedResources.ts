import { useState, useEffect } from "react";
import * as Font from "expo-font";
import data from "../data/data.json";
import { containsKey, getData, storeData } from "../storage";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourceDataAsync() {
      try {
        const hasWorkouts = await containsKey("workout-data");
        if (!hasWorkouts) await storeData("workout-data", data);

        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
          "montserrat-variable": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        });
      } catch (err) {
        console.warn(err);
      } finally {
        const workouts = await getData("workout-data");
        setIsLoadingComplete(true);
      }
    }
    loadResourceDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
