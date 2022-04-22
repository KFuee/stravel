import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
});

export default function ResetPasswordScreen({ route }: any) {
  const { token } = route.params;

  return (
    <View style={styles.container}>
      <Text>{token}</Text>
    </View>
  );
}
