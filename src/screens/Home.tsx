import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import { Header } from '../components';
import { StyledButton } from '../components/common';
import { RootStackParamList } from '../navigation';
import { useAppDispatch, useAppSelector } from '../store';
import { createSession, getCurrentSession } from '../store/session';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { currentSession } = useAppSelector((state) => state.scorer);

  const onPressNewSession = async () => {
    await dispatch(createSession());
    navigation.navigate('Session');
  };

  useEffect(() => {
    dispatch(getCurrentSession());
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        {!currentSession && (
          <StyledButton color={colors.onPrimary} onPress={onPressNewSession}>
            New Session
          </StyledButton>
        )}
        {currentSession && (
          <StyledButton color={colors.onPrimary} onPress={() => navigation.navigate('Session')}>
            Continue
          </StyledButton>
        )}
        <StyledButton color={colors.onPrimary} onPress={() => navigation.navigate('Sessions')}>
          Sessions
        </StyledButton>
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
