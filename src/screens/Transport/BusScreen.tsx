import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusScreen() {
  return (
    <View style={styles.container}>
      <Text>BusScreen</Text>
    </View>
  );
}
