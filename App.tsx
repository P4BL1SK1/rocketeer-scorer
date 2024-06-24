import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { RootNavigator } from './src/navigation';
import { store } from './src/store';
import theme from './theme';

export default function App() {
  if (__DEV__) {
    require('./reactotron');
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <RootNavigator />
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  );
}
