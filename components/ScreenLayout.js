import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function ScreenLayout({ loading, children }) {
  return (
    <View
      style={ {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      } }>
      {loading ? <ActivityIndicator color='white' /> : children }
    </View>
  );
}