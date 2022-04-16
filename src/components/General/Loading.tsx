import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF4760" />
    </View>
  );
}
