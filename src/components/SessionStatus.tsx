import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { useTheme } from '../../theme';

type SessionStatusProps = {
  id: string;
  active: boolean;
};

export const SessionStatus = ({ id, active }: SessionStatusProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return active ? (
    <IconButton icon="play" iconColor={colors.reset} onPress={() => navigation.navigate('Session', { id })} />
  ) : (
    <IconButton icon="check" iconColor={colors.success} />
  );
};
