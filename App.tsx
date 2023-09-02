import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Dashboard from "./views/Dashboard";
import { DefaultTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Dashboard />

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2E3B",
    alignItems: "center",
    justifyContent: "center",
  },
});

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    secondary: "#9575CD",
    backgroundColor: "#2C2E3B",
  },
};
