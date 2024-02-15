import { StyleSheet, View } from 'react-native';
import { Counter, Header } from '../components';

export const Dashboard = () => (
  <View style={styles.container}>
    <Header />
    <Counter />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
