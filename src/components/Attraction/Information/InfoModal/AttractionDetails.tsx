import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  category: {
    fontSize: 16,
  },

  title: {
    marginBottom: 24,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

function AttractionDetails({ title, category }: any) {
  return (
    <View>
      <Text style={styles.category}>{category}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default AttractionDetails;
