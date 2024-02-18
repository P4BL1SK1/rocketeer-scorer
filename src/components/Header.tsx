import { Image, StyleSheet, View } from 'react-native';
import logoRL from '../assets/logo-rl.png';
import logo from '../assets/logo.png';

export const Header = () => (
  <View style={styles.logosContainer}>
    <Image style={styles.logo} source={logoRL} />
    <Image source={logo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    margin: 20,
  },
  logosContainer: {
    flexDirection: 'row',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
