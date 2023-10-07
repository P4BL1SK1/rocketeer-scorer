import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { MD3DarkTheme, PaperProvider } from "react-native-paper";
import Dashboard from "./src/views/Dashboard";

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
    primary: "#4caf50",
    error: "#f44336",
    secondary: "#9575CD",
    backgroundColor: "#2C2E3B",
  },
};
