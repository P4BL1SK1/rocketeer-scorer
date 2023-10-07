import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Dashboard from "./src/views/Dashboard";
import theme from "./theme.ts";

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
