import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  lineContainer: {
    padding: 4,
    marginRight: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF4760',
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default function StopItemLines({ lines }: any) {
  return (
    <View style={styles.container}>
      {lines.map((line: any) => (
        <View key={line} style={styles.lineContainer}>
          <Text style={styles.text}>{line}</Text>
        </View>
      ))}
    </View>
  );
}
