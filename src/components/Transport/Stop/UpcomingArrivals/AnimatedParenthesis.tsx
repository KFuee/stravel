import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  parenthesis: {
    fontWeight: 'bold',
    color: '#FF4760',
  },
});

export default function AnimatedParenthesis({ currentParenthesis }: any) {
  return (
    <View style={styles.container}>
      {currentParenthesis >= 2 && (
        <Text style={[styles.parenthesis, { fontSize: 12, bottom: 1.35 }]}>
          (
        </Text>
      )}

      {currentParenthesis >= 1 && (
        <Text
          style={[
            styles.parenthesis,
            { marginRight: 4, fontSize: 10, bottom: 1 },
          ]}
        >
          (
        </Text>
      )}
    </View>
  );
}
