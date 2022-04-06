import { useState, useEffect } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourceDataAsync() {
      try {
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
          "montserrat-variable": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        });
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourceDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
