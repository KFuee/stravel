import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  category: {
    fontSize: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

function AttractionDetails({ title, category }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{category}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default AttractionDetails;
