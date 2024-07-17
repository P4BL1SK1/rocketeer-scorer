import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import { Header } from '../components';
import { StyledButton } from '../components/common';
import { createSession } from '../helpers';
import { getActiveSession } from '../helpers/sessionHelper';
import { RootStackParamList } from '../navigation';
import { useAppDispatch, useAppSelector } from '../store';
import { setActiveSession } from '../store/session';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { currentSession } = useAppSelector((state) => state.scorer);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const activeSession = await getActiveSession();
        dispatch(setActiveSession(activeSession));
      };
      fetchData();
    }, [])
  );

  const onPressNewSession = async () => {
    const newSession = await createSession();
    dispatch(setActiveSession(newSession));
    navigation.navigate('Session', { id: newSession.id });
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <>
          {currentSession ? (
            <StyledButton
              color={colors.onPrimary}
              onPress={() => navigation.navigate('Session', { id: currentSession.id })}
            >
              Continue
            </StyledButton>
          ) : (
            <StyledButton color={colors.onPrimary} onPress={onPressNewSession}>
              New Session
            </StyledButton>
          )}
          <StyledButton color={colors.onPrimary} onPress={() => navigation.navigate('Sessions')}>
            Sessions
          </StyledButton>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
