import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { nearbyAttractions } from '../../../data/exploreData';

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
});

function PlacesMap({ mapPadding }: any) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 41.64914814886517,
        longitude: -0.8890772467553941,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsPointsOfInterest={false}
      showsUserLocation={false}
      mapPadding={mapPadding}
    >
      {nearbyAttractions.map(place => (
        <Marker
          key={place.id}
          coordinate={{
            latitude: place.coordinates.latitude,
            longitude: place.coordinates.longitude,
          }}
        />
      ))}
    </MapView>
  );
}

export default PlacesMap;
