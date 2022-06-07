import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

  text: { fontSize: 16, fontWeight: 'bold' },

  illustration: {
    width: 300,
    height: 300,
  },
});

function NoResultsBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops, no se encontraron resultados</Text>

      <Image
        source={require('../../assets/images/illustrations/no-results.png')}
        style={styles.illustration}
        resizeMode="contain"
      />
    </View>
  );
}

export default NoResultsBanner;
