import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
});

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Inicia sesión</Text>
    </View>
  );
}
