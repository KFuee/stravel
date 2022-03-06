import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { nearbyAttractions } from '../../../data/exploreData';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function PlacesMap({ mapRef, mapPadding, latitudeDelta, longitudeDelta }: any) {
  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      mapPadding={mapPadding}
      initialRegion={{
        latitude: 41.64914814886517,
        longitude: -0.8890772467553941,
        latitudeDelta,
        longitudeDelta,
      }}
      toolbarEnabled={false}
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
