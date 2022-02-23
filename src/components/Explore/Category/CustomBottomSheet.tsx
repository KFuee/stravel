import { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import PlaceCard from './PlaceCard';
import PlacesMap from './PlacesMap';

import { nearbyAttractions } from '../../../data/exploreData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    paddingBottom: 20,
  },

  itemContainer: {
    padding: 6,
    backgroundColor: '#EEE',
  },

  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

function CustomBottomSheet({ category }: any) {
  const sheetRef = useRef<BottomSheet>(null);

  const data = useMemo(() => nearbyAttractions, []);

  const snapPoints = useMemo(() => ['50%', '90%'], []);

  const handleSheetChange = useCallback(index => {
    // eslint-disable-next-line no-console
    console.log('handleSheetChange', index);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <PlaceCard
        key={item.id}
        id={item.id}
        category={item.category}
        title={item.title}
        rating={item.rating}
        image={item.image}
        isLast={item.id === item.length}
      />
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
          56 resultados para &quot;{category}&quot;
        </Text>

        <BottomSheetFlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
}

export default CustomBottomSheet;
