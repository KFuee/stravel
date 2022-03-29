import { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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
  coordinates,
}: any) {
  const [routeCoordinates] = useState(
    coordinates.map(([lng, lat]: any) => ({
      latitude: lat,
      longitude: lng,
    })),
  );

  const onMapReady = useCallback(() => {
    mapRef.current.fitToElements({
      edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
      animated: false,
    });
  }, [mapRef]);

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
      onMapReady={onMapReady}
    >
      <Marker
        coordinate={{
          latitude: routeCoordinates[0].latitude,
          longitude: routeCoordinates[0].longitude,
        }}
      />

      <Marker
        coordinate={{
          latitude: routeCoordinates[routeCoordinates.length - 1].latitude,
          longitude: routeCoordinates[routeCoordinates.length - 1].longitude,
        }}
      />

      <Polyline
        coordinates={routeCoordinates}
        strokeWidth={2}
        strokeColor="#FF4760"
      />
    </MapView>
  );
}
