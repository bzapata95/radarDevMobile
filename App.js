import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="#7d40e7"
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
