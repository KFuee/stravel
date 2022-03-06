import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import MapView, { EdgePadding } from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

import PlacesMap from '../../components/Explore/Category/PlacesMap';
import CustomBottomSheet from '../../components/Explore/Category/CustomBottomSheet';

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

function CategoryScreen({ route }: any) {
  // refs
  const mapRef = useRef<MapView>(null);
  const sheetRef = useRef<BottomSheet>(null);

  // state
  const [mapPadding, setMapPadding] = useState<EdgePadding>();
  const [currentSheetIndex, setCurrentSheetIndex] = useState(1);

  // hooks
  const { bottom: bottomSafeArea } = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  // constants
  const statusBarHeight =
    (StatusBar.currentHeight === 24 ? 0 : StatusBar.currentHeight) || 0;
  const viewHeight = SCREEN_HEIGHT - headerHeight + statusBarHeight;

  useEffect(() => {
    setMapPadding({
      top: 0,
      bottom: viewHeight * 0.5 - bottomSafeArea,
      left: 6,
      right: 6,
    });
  }, [viewHeight, bottomSafeArea]);

  const handleSheetChange = useCallback(
    (index: number) => {
      if (index !== 2) {
        setMapPadding({
          top: 0,
          bottom:
            (index === 0 ? viewHeight * 0.25 : viewHeight * 0.5) -
            bottomSafeArea,
          left: 6,
          right: 6,
        });
      }

      setCurrentSheetIndex(index);
    },
    [viewHeight, bottomSafeArea],
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <PlacesMap
        mapRef={mapRef}
        mapPadding={mapPadding}
        latitudeDelta={LATITUDE_DELTA}
        longitudeDelta={LONGITUDE_DELTA}
      />

      <CustomBottomSheet
        sheetRef={sheetRef}
        index={currentSheetIndex}
        onChange={handleSheetChange}
        category={route.params.title}
      />
    </GestureHandlerRootView>
  );
}

export default CategoryScreen;
