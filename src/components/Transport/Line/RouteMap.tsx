import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function RouteMap({
  mapRef,
  mapPadding,
  latitudeDelta,
  longitudeDelta,
  line,
}: any) {
  console.log('line', line);

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
    />
  );
}
