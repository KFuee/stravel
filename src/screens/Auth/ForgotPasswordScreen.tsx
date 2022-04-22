import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
});

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text>ForgotPasswordScreen</Text>
    </View>
  );
}
