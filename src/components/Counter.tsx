import { Audio } from "expo-av";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useCounter } from "../hooks";
import StyledButton from "./Common/StyledButton";
import { useTheme } from "../../theme";
import DialogButtonIcon from "./Common/DialogButtonIcon";

const Counter = () => {
  const { colors } = useTheme();
  const { counter, increment, decrement, reset } = useCounter();

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
      <View style={styles.dialogContainer}>
        <DialogButtonIcon
          icon="backup-restore"
          text="Reset scorer"
          dialogText="Are you sure you want to reset the scorer?"
          onAccept={() => reset()}
          onCancel={() => {
            return;
          }}
        />
      </View>
      <View
        style={{
          ...styles.counterValueContainer,
          backgroundColor: colors.secondaryContainer,
        }}
      >
        <Text style={styles.counterValue}>{counter}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton onPress={onPressDecrement} color={colors.cancel}>
          Perdido
        </StyledButton>

        <StyledButton onPress={onPressIncrement} color={colors.success}>
          Ganado
        </StyledButton>
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
  dialogContainer: {
    marginBottom: 100,
    marginTop: -100,
    width: 350,
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
