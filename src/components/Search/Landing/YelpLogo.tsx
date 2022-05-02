import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  logo: {
    width: 50,
    height: 50,
    top: -1.25,
  },
});

function YelpLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resultados obtenidos de</Text>

      <Image
        source={require('../../../assets/images/yelp/yelp_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

export default YelpLogo;
