import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SessionScreen, SessionsScreen } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Session: { id: string };
  Sessions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Session" component={SessionScreen} />
      <Stack.Screen name="Sessions" component={SessionsScreen} />
    </Stack.Navigator>
  );
};
