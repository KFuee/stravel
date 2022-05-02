import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: { fontSize: 16, fontWeight: 'bold' },

  illustration: {
    width: 300,
    height: 300,
  },
});

function SearchNoResults() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No se encontraron resultados</Text>

      <Image
        source={require('../../../assets/images/illustrations/explore-empty.png')}
        style={styles.illustration}
        resizeMode="contain"
      />
    </View>
  );
}

export default SearchNoResults;
