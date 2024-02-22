import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import { Header } from '../components';
import { StyledButton } from '../components/common';
import { RootStackParamList } from '../navigation';
import { useAppDispatch } from '../store';
import { startSession } from '../store/session';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const onPressNewSession = () => {
    dispatch(startSession());
    navigation.navigate('Session');
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <StyledButton color={colors.onPrimary} onPress={onPressNewSession}>
          New Session
        </StyledButton>
        <StyledButton color={colors.onPrimary} onPress={() => console.log('Sesiones')}>
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
