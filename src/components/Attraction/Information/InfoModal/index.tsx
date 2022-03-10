import { StyleSheet, View } from 'react-native';

import LocationMap from './LocationMap';
import DetailsList from './DetailsList';
import AttractionDetails from './AttractionDetails';
import AttractionDescription from './Description';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

        <AttractionDescription description={attraction.description} />
      </View>
    </View>
  );
}

export default AttractionInfoModal;
