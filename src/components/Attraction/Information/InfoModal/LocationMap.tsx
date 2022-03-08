import { Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const style = StyleSheet.create({
  map: {
    width: '100%',
    height: '25%',
  },
});

// measurements
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function LocationMap({ coordinates }: any) {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={style.map}
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      zoomEnabled={false}
      scrollEnabled={false}
      toolbarEnabled={false}
    >
      <Marker
        coordinate={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }}
      />
    </MapView>
  );
}

export default LocationMap;
