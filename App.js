import React from "react";
import PayMe from "./src";
import { AppearanceProvider } from "react-native-appearance";

export default function App() {
  return (
    <AppearanceProvider>
      <PayMe />
    </AppearanceProvider>
  );
}
