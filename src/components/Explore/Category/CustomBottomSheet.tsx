import { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import PlacesMap from './PlacesMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: 'white',
  },

  itemContainer: {
    padding: 6,
    marginVertical: 6,
    backgroundColor: '#eee',
  },

  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

function CustomBottomSheet() {
  const sheetRef = useRef<BottomSheet>(null);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item hotel-${index}`),
    [],
  );

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleSheetChange = useCallback(index => {
    // eslint-disable-next-line no-console
    console.log('handleSheetChange', index);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <PlacesMap />

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <Text style={styles.listTitle}>
          56 resultados para &quot;Hoteles&quot;
        </Text>

        <BottomSheetFlatList
          data={data}
          keyExtractor={i => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
}

export default CustomBottomSheet;
