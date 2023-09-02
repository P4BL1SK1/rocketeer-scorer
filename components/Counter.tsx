import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { StyledButton } from "./Common";

const Counter = () => {
  const theme = useTheme();
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.counterValueContainer,
          backgroundColor: theme.colors.secondaryContainer,
        }}
      >
        <Text style={styles.counterValue}>{counter}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton label="+" onPress={handleIncreaseCounter} />
        <StyledButton label="-" onPress={handleDecreaseCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  counterValueContainer: {
    borderRadius: 17,
    width: 250,
  },
  counterValue: {
    textAlign: "center",
    fontSize: 150,
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
  },
});

export default Counter;
