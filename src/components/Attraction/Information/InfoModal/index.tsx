import { StyleSheet, View } from 'react-native';

import LocationMap from './LocationMap';
import DetailsList from './DetailsList';
import AttractionDetails from './AttractionDetails';
import AttractionDescription from './Description';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  detailsContainer: {
    padding: 16,
  },
});

function AttractionInfoModal({ route }: any) {
  const { attraction } = route.params;

  return (
    <View style={styles.container}>
      <LocationMap coordinates={attraction.coordinates} />

      <View style={styles.detailsContainer}>
        <AttractionDetails
          title={attraction.name}
          category={attraction.categories[0].title}
        />

        <DetailsList
          details={{
            address: attraction.location.address1,
            phoneNumber: attraction.phone,
            website: attraction.website,
            rating: attraction.rating,
          }}
        />

        <AttractionDescription description={attraction.description} />
      </View>
    </View>
  );
}

export default AttractionInfoModal;
