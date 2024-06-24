import Constants from 'expo-constants';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: Constants.expoConfig?.name,
})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default reactotron;
