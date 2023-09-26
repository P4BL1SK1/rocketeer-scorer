import { Audio } from "expo-av";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useCounter } from "../hooks";
import { StyledButton } from "./Common";

const Counter = () => {
  const { colors } = useTheme();
  const { counter, increment, decrement } = useCounter();

  const onPressIncrement = async () => {
    increment();
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/hibrido.mp3")
    );
    await sound.playAsync();
  };

  const onPressDecrement = async () => {
    decrement();
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/irma.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.counterValueContainer,
          backgroundColor: colors.secondaryContainer,
        }}
      >
        <Text style={styles.counterValue}>{counter}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          label="+"
          onPress={onPressIncrement}
          color={colors.primary}
        />
        <StyledButton
          label="-"
          onPress={onPressDecrement}
          color={colors.error}
        />
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
    alignItems: "center",
    flexDirection: "row",
    marginTop: 100,
  },
});

export default Counter;
