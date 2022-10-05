import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Home } from "./src/screens/Home";
import theme from "./src/themes";

import {
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_300Light,
          Roboto_500Medium,
          Roboto_900Black,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </ThemeProvider>
  );
}
