import { StyleSheet, View } from 'react-native';

type StatusCircleProps = {
  active: boolean;
};

export const StatusCircle = ({ active }: StatusCircleProps) => {
  return <View style={[styles.circle, { backgroundColor: active ? 'green' : 'red' }]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});
