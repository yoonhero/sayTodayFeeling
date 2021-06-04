import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { AppearanceProvider } from "react-native-appearance";
import { Appearance } from "react-native";
import LoggedInNav from "./navigators/LoggedInNav";

export default function App() {
  const [loading, setLoading] = useState(true);
  const preloadAssets = () => {
    const fontToLoad = [Ionicons.font, require("./assets/fonts/NanumPenScript-Regular.ttf")];
    const fontPromises = fontToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/asset.png"),

    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all(...fontPromises, ...imagePromises);
  };

  if (loading) {
    return (
      <AppLoading
        startAsync={ preloadAssets }
        onError={ console.warn }
        onFinish={ setLoading(false) }
      />
    );
  }

  return (
    <NavigationContainer>
      <LoggedInNav />
    </NavigationContainer>
  );
}