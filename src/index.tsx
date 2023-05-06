import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { registerRootComponent } from "expo";
import Screens from "./navigation";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Screens />
    </SafeAreaView>
  );
}

export default registerRootComponent(App);
