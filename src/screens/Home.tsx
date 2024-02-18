import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import { Header } from '../components';
import { StyledButton } from '../components/common';
import { RootStackParamList } from '../navigation';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <StyledButton color={colors.onPrimary} onPress={() => navigation.navigate('Session')}>
          Nueva Sesion
        </StyledButton>
        <StyledButton color={colors.onPrimary} onPress={() => console.log('Sesiones')}>
          Sesiones
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
