import { StyleSheet, View } from 'react-native';
import AttractionDetails from './AttractionDetails';
import DetailsList from './DetailsList';
import LocationMap from './LocationMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  detailsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

function AttractionInfoModal({ route }: any) {
  const { attraction } = route.params;

  return (
    <View style={styles.container}>
      <LocationMap coordinates={attraction.coordinates} />

      <View style={styles.detailsContainer}>
        <AttractionDetails
          title={attraction.title}
          category={attraction.category}
        />

        <DetailsList
          details={{
            address: attraction.address,
            phoneNumber: attraction.phoneNumber,
            website: attraction.website,
            rating: attraction.rating,
          }}
        />
      </View>
    </View>
  );
}

export default AttractionInfoModal;
