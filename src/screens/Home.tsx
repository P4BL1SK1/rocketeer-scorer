import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from '../../theme';
import { Header } from '../components';
import { StyledButton } from '../components/common';
import { RootStackParamList } from '../navigation';
import { useAppDispatch, useAppSelector } from '../store';
import { createSession, getSessions } from '../store/session';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { currentSession, loading } = useAppSelector((state) => state.scorer);

  const onPressNewSession = async () => {
    await dispatch(createSession());
    navigation.navigate('Session');
  };

  useEffect(() => {
    dispatch(getSessions());
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <>
            {currentSession ? (
              <StyledButton color={colors.onPrimary} onPress={() => navigation.navigate('Session')}>
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
        )}
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
