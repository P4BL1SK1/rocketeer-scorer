import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { doc, updateDoc } from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../../theme';
import { GamesPlayed } from '../components';
import { DialogButtonIcon, StyledButton } from '../components/common';
import { database } from '../firebase/config';
import { getRandomSound, playSound, unsubscribeSession } from '../helpers';
import { RootStackParamList } from '../navigation';
import { Session } from '../types';
import { SESSIONS } from '../utils/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Session'>;

export const SessionScreen = ({ navigation, route }: HomeProps) => {
  const { colors } = useTheme();
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const { counter, played, won, lost } = currentSession || {};

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = unsubscribeSession(route.params.id, setCurrentSession);
      return () => unsubscribe();
    }, [])
  );

  const onPressIncrement = async () => {
    updateSession({ counter: counter + 1, played: played + 1, won: won + 1 });
    await playSound(getRandomSound());
  };

  const onPressDecrement = async () => {
    updateSession({ counter: counter - 1, played: played + 1, won: lost + 1 });
    await playSound(getRandomSound());
  };

  const onPressReset = async () => {
    updateSession({ counter: 0, played: 0, won: 0, lost: 0 });
  };

  const onPressFinish = async () => {
    await updateSession({ active: false });
    navigation.navigate('Home');
  };

  const updateSession = async (updatedSession: Partial<Session>) => {
    const sessionRef = doc(database, SESSIONS, route.params.id);
    await updateDoc(sessionRef, updatedSession);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        <DialogButtonIcon
          icon="backup-restore"
          dialogText="Are you sure you want to reset the scorer?"
          onAccept={onPressReset}
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
        <StyledButton onPress={onPressIncrement} color={colors.success}>
          Won
        </StyledButton>
        <StyledButton onPress={onPressDecrement} color={colors.cancel}>
          Lost
        </StyledButton>
      </View>
      <View style={styles.finishContainer}>
        <StyledButton onPress={onPressFinish} color={colors.shadow}>
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
