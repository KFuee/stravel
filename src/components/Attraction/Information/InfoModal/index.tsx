import { StyleSheet, View } from 'react-native';
import DetailsList from './DetailsList';
import LocationMap from './LocationMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function AttractionInfoModal({ route }: any) {
  const { attraction } = route.params;

  return (
    <View style={styles.container}>
      <LocationMap coordinates={attraction.coordinates} />

      <DetailsList
        details={{
          address: attraction.address,
          phoneNumber: attraction.phoneNumber,
          website: attraction.website,
          rating: attraction.rating,
        }}
      />
    </View>
  );
}

export default AttractionInfoModal;
