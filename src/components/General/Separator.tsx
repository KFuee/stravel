import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
});

export default function Separator() {
  return <View style={styles.separator} />;
}
