import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { useTheme } from '../../theme';
import { RootStackParamList } from '../navigation';

type StatusCircleProps = {
  id: string;
  active: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Sessions'>;
};

export const SessionStatus = ({ id, active, navigation }: StatusCircleProps) => {
  const { colors } = useTheme();

  return active ? (
    <IconButton icon="play" iconColor={colors.reset} onPress={() => navigation.navigate('Session', { id })} />
  ) : (
    <IconButton icon="check" iconColor={colors.success} />
  );
};
