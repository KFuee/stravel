import { StyleSheet, View, Text } from 'react-native';

// components
import AttractionDetail from './AttractionDetail';
import AttractionRating from './AttractionRating';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function AttractionInformation({ attraction }: any) {
  return (
    <View>
      <Text style={styles.title}>{attraction.name}</Text>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>
        {attraction.price ? `${attraction.price} - ` : 'Gratuito - '}
        {attraction.categories[0].title}
      </Text>

      <AttractionRating attraction={attraction} />

      <View style={styles.detailsContainer}>
        <AttractionDetail
          icon="phone-square"
          text={attraction?.phone || '638384832'}
        />

        <AttractionDetail icon="globe" text="yelp.es" />
      </View>

      <AttractionDetail icon="map-marker" text={attraction.location.address1} />
    </View>
  );
}

export default AttractionInformation;
