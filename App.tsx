import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";

import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes/index";

import { defaultTheme } from "./src/global/styles/theme";

import { AuthProvider, useAuth } from "./src/hooks/auth";
import { AppRoutes } from "./src/routes/app.routes";
import { SignIn } from "./src/screens/SignIn";

import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
