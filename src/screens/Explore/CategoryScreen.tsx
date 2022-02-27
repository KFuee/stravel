import { useCallback, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

import PlacesMap from '../../components/Explore/Category/PlacesMap';
import CustomBottomSheet from '../../components/Explore/Category/CustomBottomSheet';

function CategoryScreen({ route }: any) {
  const [viewHeight, setViewHeight] = useState(0);
  const [mapPadding, setMapPadding] = useState({});
  const [currentSheetIndex, setCurrentSheetIndex] = useState(1);

  const onLayout = useCallback(event => {
    const { height } = event.nativeEvent.layout;

    setViewHeight(height);
  }, []);

  const handleSheetChange = useCallback(
    (index: number) => {
      let bottomSheetHeight = 0;

      if (index === 0) {
        bottomSheetHeight = viewHeight * 0.25 - 28;
      }

      if (index === 1) {
        bottomSheetHeight = viewHeight * 0.5 - 28;
      }

      setMapPadding({
        top: 0,
        bottom: bottomSheetHeight,
        left: 6,
        right: 6,
      });

      setCurrentSheetIndex(index);
    },
    [viewHeight],
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <View>
        <PlacesMap mapPadding={mapPadding} />

        <CustomBottomSheet
          category={route.params.title}
          onChange={handleSheetChange}
          currentIndex={currentSheetIndex}
        />
      </View>
    </GestureHandlerRootView>
  );
}

export default CategoryScreen;
