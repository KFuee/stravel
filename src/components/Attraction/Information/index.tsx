import { StyleSheet, View, Text } from 'react-native';

import LocationDetails from './LocationDetails';
import StarRating from '../../General/StarRating';
import InfoIcon from './InfoIcon';

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

function AttractionInformation({ attraction }: any) {
  return (
    <View style={styles.info}>
      <View>
        <Text style={styles.title}>{attraction?.title}</Text>

        <LocationDetails streetAdress={attraction?.address} />

        <StarRating rating={attraction?.rating} textColor="#000000" />
      </View>

      <InfoIcon />
    </View>
  );
}

export default AttractionInformation;
