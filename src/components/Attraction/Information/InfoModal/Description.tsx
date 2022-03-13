import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  titleText: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },

  descriptionText: {
    fontSize: 16,
  },
});

function AttractionDescription({ description }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Descripción</Text>

      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
}

export default AttractionDescription;
