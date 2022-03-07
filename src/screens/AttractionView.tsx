import { StyleSheet, View, Image, Text } from 'react-native';
import LocationDetails from '../components/Attraction/LocationDetails';
import StarRating from '../components/General/StarRating';

import { getAttraction } from '../data/exploreData';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#000000',
  },

  cover: {
    width: '100%',
    height: '30%',
    zIndex: 1,
  },

  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: '75%',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#FFF',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

function AttractionView({ route }: any) {
  const { id } = route.params;
  const attraction = getAttraction(id);

  return (
    <View style={styles.container}>
      <Image source={attraction?.image} style={styles.cover} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{attraction?.title}</Text>

        <LocationDetails streetAdress={attraction?.address} />

        <StarRating rating={attraction?.rating} textColor="#000000" />
      </View>
    </View>
  );
}

export default AttractionView;
