import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../../theme';
import { GamesPlayed } from '../components';
import { DialogButtonIcon, StyledButton } from '../components/common';
import { getRandomSound, playSound, unsubscribeSession, updateSession } from '../helpers';
import { RootStackParamList } from '../navigation';
import { useAppDispatch, useAppSelector } from '../store';

type SessionProps = NativeStackScreenProps<RootStackParamList, 'Session'>;

export const SessionScreen = ({ navigation, route }: SessionProps) => {
  const sessionId = route.params.id;
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { currentSession } = useAppSelector((state) => state.scorer);
  const { counter, played, won, lost } = currentSession;

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = unsubscribeSession(sessionId, dispatch);
      return () => unsubscribe();
    }, [])
  );

  const onPressIncrement = async () => {
    updateSession({ counter: counter + 1, played: played + 1, won: won + 1 }, sessionId);
    await playSound(getRandomSound());
  };

  const onPressDecrement = async () => {
    updateSession({ counter: counter - 1, played: played + 1, lost: lost + 1 }, sessionId);
    await playSound(getRandomSound());
  };

  const onPressReset = async () => {
    updateSession({ counter: 0, played: 0, won: 0, lost: 0 }, sessionId);
  };

  const onPressFinish = async () => {
    updateSession({ active: false }, sessionId);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        <DialogButtonIcon
          icon="backup-restore"
          dialogText="Are you sure you want to reset the scorer?"
          color={colors.reset}
          onAccept={onPressReset}
          onCancel={() => {
            return;
          }}
          disabled={played === 0}
        />
      </View>
      <View style={styles.counterValueContainer}>
        <Text style={styles.counterValue}>{counter}</Text>
      </View>
      <GamesPlayed played={played} />
      <View style={styles.buttonsContainer}>
        <StyledButton onPress={onPressIncrement} color={colors.success}>
          Won
        </StyledButton>
        <StyledButton onPress={onPressDecrement} color={colors.cancel}>
          Lost
        </StyledButton>
      </View>
      <View style={styles.finishContainer}>
        <StyledButton onPress={onPressFinish} color={colors.finish}>
          Finish
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
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
