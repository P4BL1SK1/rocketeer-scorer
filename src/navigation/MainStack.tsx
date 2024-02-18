import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Session } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Session: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Session" component={Session} />
    </Stack.Navigator>
  );
};
