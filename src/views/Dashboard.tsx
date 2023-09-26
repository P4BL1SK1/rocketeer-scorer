import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "../components/Counter";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;
