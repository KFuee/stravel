import { StyleSheet, View, Image, Text } from 'react-native';
import StarRating from '../components/General/StarRating';

import { getAttraction } from '../data/exploreData';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
  },

  cover: {
    width: '100%',
    height: '25%',
  },

  infoContainer: {
    width: '100%',
    height: '75%',
    padding: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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

        <StarRating rating={attraction?.rating} textColor="#000000" />
      </View>
    </View>
  );
}

export default AttractionView;
