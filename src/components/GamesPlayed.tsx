import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../../theme';

type GamesPlayedProps = {
  played: number;
};

export const GamesPlayed = ({ played }: GamesPlayedProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.secondaryContainer,
      }}
    >
      <Text style={styles.textValue}>Games played: {played}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textValue: {
    fontSize: 20,
  },
});
