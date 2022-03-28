import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function BusStopScreen({ route }: any) {
  const { stop } = route.params;

  return (
    <View style={styles.container}>
      <Text>{stop.name}</Text>
    </View>
  );
}
