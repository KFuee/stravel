import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { nearbyAttractions } from '../../../data/exploreData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

function PlacesMap({ mapPadding }: any) {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapPadding={mapPadding}
        initialRegion={{
          latitude: 41.64914814886517,
          longitude: -0.8890772467553941,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
    </View>
  );
}

export default PlacesMap;
