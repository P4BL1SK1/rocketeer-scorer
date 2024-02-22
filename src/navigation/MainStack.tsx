import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Session, Sessions } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Session: undefined;
  Sessions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Session" component={Session} />
      <Stack.Screen name="Sessions" component={Sessions} />
    </Stack.Navigator>
  );
};
