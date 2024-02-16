import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Dashboard } from './src/views';
import theme from './theme.ts';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Dashboard />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2E3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
