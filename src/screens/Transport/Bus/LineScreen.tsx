import React, { useRef, useState, useEffect, useCallback } from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import MapView, { EdgePadding } from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// services
import { getBusLineById } from '../../../services/transportService';

// components
import RouteMap from '../../../components/Transport/Line/RouteMap';
import RouteBottomSheet from '../../../components/Transport/Line/RouteBottomSheet';
import Loading from '../../../components/General/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

// measurements
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function BusLineScreen({ route }: any) {
  const { line } = route.params;

  // refs
  const mapRef = useRef<MapView>(null);
  const sheetRef = useRef<BottomSheet>(null);

  // state
  const [mapPadding, setMapPadding] = useState<EdgePadding>();
  const [currentSheetIndex, setCurrentSheetIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [lineFinal, setLineFinal] = useState({} as any);

  // hooks
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  // constants
  const statusBarHeight =
    (StatusBar.currentHeight === 24 ? 0 : StatusBar.currentHeight) || 0;
  const viewHeight =
    SCREEN_HEIGHT - headerHeight - tabBarHeight + statusBarHeight;

  // callbacks
  const fetchLine = useCallback(async () => {
    const response = await getBusLineById(line);
    setLineFinal(response);
    setLoading(false);
  }, [line]);

  const handleSheetChange = useCallback(
    (index: number) => {
      if (index !== 2) {
        setMapPadding({
          top: 0,
          bottom: index === 0 ? viewHeight * 0.25 : viewHeight * 0.5,
          left: 6,
          right: 6,
        });
      }

      setCurrentSheetIndex(index);
    },
    [viewHeight],
  );

  // effects
  useEffect(() => {
    fetchLine();
    setMapPadding({
      top: 0,
      bottom: viewHeight * 0.25,
      left: 6,
      right: 6,
    });
  }, [fetchLine, viewHeight]);

  if (loading) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <RouteMap
        mapRef={mapRef}
        mapPadding={mapPadding}
        latitudeDelta={LATITUDE_DELTA}
        longitudeDelta={LONGITUDE_DELTA}
        coordinates={lineFinal.geometry}
      />

      <RouteBottomSheet
        sheetRef={sheetRef}
        index={currentSheetIndex}
        onChange={handleSheetChange}
        lineName={lineFinal.title}
        stops={lineFinal.lineStops}
      />
    </GestureHandlerRootView>
  );
}
