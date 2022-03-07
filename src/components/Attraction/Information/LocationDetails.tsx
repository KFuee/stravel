import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  adressText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

function LocationDetails({ streetAdress }: any) {
  return (
    <View style={styles.container}>
      <FontAwesome name="map-marker" size={18} color="#FF4760" />

      <Text style={styles.adressText}>{streetAdress}</Text>
    </View>
  );
}

export default LocationDetails;
