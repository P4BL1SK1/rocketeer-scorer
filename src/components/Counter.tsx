import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "../../theme";
import { getRandomSound, playSound } from "../helpers";
import { useCounter } from "../hooks";
import { GamesPlayed } from "./GamesPlayed";
import { DialogButtonIcon, StyledButton } from "./common";

const Counter = () => {
  const { colors } = useTheme();
  const { counter, increment, decrement, reset } = useCounter();
  const { counter: games, increment: incrementGames } = useCounter();

  const onPressIncrement = async () => {
    increment();
    incrementGames();
    await playSound(getRandomSound());
  };

  const onPressDecrement = async () => {
    decrement();
    incrementGames();
    await playSound(getRandomSound());
  };

  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        <DialogButtonIcon
          icon="backup-restore"
          dialogText="Are you sure you want to reset the scorer?"
          onAccept={reset}
          onCancel={() => {
            return;
          }}
          disabled={counter === 0}
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
      <GamesPlayed games={games} />
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
    marginTop: 70,
  },
});

export default Counter;
