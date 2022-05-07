import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import MapView, { EdgePadding } from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import axios from 'axios';

// components
import Loading from '../../components/General/Loading';
import PlacesMap from '../../components/Explore/Category/PlacesMap';
import PlacesBottomSheet from '../../components/Explore/Category/PlacesBottomSheet';

// types
import { Attraction } from '../../types/attractions/attraction';

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
  const { alias, title } = route.params;

  // refs
  const mapRef = useRef<MapView>(null);
  const sheetRef = useRef<BottomSheet>(null);

  // state
  const [mapPadding, setMapPadding] = useState<EdgePadding>();
  const [currentSheetIndex, setCurrentSheetIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  // hooks
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  // constants
  const statusBarHeight =
    (StatusBar.currentHeight === 24 ? 0 : StatusBar.currentHeight) || 0;
  const viewHeight =
    SCREEN_HEIGHT - headerHeight - tabBarHeight + statusBarHeight;

  // callbacks
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

  const fetchData = useCallback(async () => {
    try {
      const attractionResponse = await axios.get(
        'http://192.168.1.15:3001/v1/places/search',
        {
          params: {
            term: alias,
            latitude: '41.651365271764284',
            longitude: '-0.8889731889860247',
          },
        },
      );

      setAttractions(attractionResponse.data.businesses);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [alias]);

  useEffect(() => {
    setMapPadding({
      top: 0,
      bottom: viewHeight * 0.5,
      left: 6,
      right: 6,
    });

    fetchData();
  }, [viewHeight, fetchData]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <PlacesMap
        mapRef={mapRef}
        mapPadding={mapPadding}
        latitudeDelta={LATITUDE_DELTA}
        longitudeDelta={LONGITUDE_DELTA}
        attractions={attractions}
      />

      <PlacesBottomSheet
        sheetRef={sheetRef}
        index={currentSheetIndex}
        onChange={handleSheetChange}
        category={title}
        attractions={attractions}
      />
    </GestureHandlerRootView>
  );
}

export default CategoryScreen;
