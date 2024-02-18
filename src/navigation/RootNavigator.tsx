import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { adaptNavigationTheme } from 'react-native-paper';
import { MainStack } from './MainStack';

const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme });

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <MainStack />
    </NavigationContainer>
  );
};
