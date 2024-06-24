import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../../theme';
import { GamesPlayed } from '../components';
import { DialogButtonIcon, StyledButton } from '../components/common';
import { getRandomSound, playSound } from '../helpers';
import { RootStackParamList } from '../navigation';
import { useAppDispatch, useAppSelector } from '../store';
import { decrement, finishSession, increment, reset, updateSession } from '../store/session';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Session'>;

export const Session = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { id, counter, played } = useAppSelector((state) => state.scorer.currentSession);

  const onPressIncrement = async () => {
    dispatch(increment());
    dispatch(updateSession(id));
    await playSound(getRandomSound());
  };

  const onPressDecrement = async () => {
    dispatch(decrement());
    dispatch(updateSession(id));
    await playSound(getRandomSound());
  };

  const onPressFinish = async () => {
    dispatch(finishSession(id));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        <DialogButtonIcon
          icon="backup-restore"
          dialogText="Are you sure you want to reset the scorer?"
          onAccept={() => dispatch(reset())}
          onCancel={() => {
            return;
          }}
          disabled={played === 0}
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
      <GamesPlayed played={played} />
      <View style={styles.buttonsContainer}>
        <StyledButton onPress={onPressDecrement} color={colors.cancel}>
          Perdido
        </StyledButton>
        <StyledButton onPress={onPressIncrement} color={colors.success}>
          Ganado
        </StyledButton>
      </View>
      <View style={styles.finishContainer}>
        <StyledButton onPress={onPressFinish} color={colors.shadow}>
          Finalizar
        </StyledButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    marginBottom: 100,
    marginTop: -100,
    width: 350,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  counterValueContainer: {
    borderRadius: 17,
    width: 250,
  },
  counterValue: {
    textAlign: 'center',
    fontSize: 150,
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  finishContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});
