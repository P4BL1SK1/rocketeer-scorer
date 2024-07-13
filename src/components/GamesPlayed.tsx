import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../../theme';

type GamesPlayedProps = {
  played: number;
};

export const GamesPlayed = ({ played }: GamesPlayedProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.textValue}>Games played: {played}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 40,
    borderRadius: 50,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  textValue: {
    fontSize: 20,
  },
});
