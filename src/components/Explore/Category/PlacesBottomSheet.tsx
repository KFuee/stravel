import { useCallback, useMemo } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import PlaceCard from './PlaceCard';

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 16,
    marginHorizontal: 16,
  },

  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
  },
});

function PlacesBottomSheet({
  sheetRef,
  index,
  onChange,
  category,
  attractions,
}: any) {
  // memoized values
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const renderItem = useCallback(
    ({ item }) => (
      <PlaceCard
        id={item.id}
        title={item.name}
        rating={item.rating}
        image={item.image_url}
        distance={item.distance}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={index}
      snapPoints={snapPoints}
      onChange={onChange}
      backgroundStyle={{ borderRadius: index !== 2 ? 16 : 0 }}
    >
      <Text style={styles.listTitle}>
        {attractions.length} resultados para &quot;{category}&quot;
      </Text>

      <BottomSheetFlatList
        data={attractions}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
}

export default PlacesBottomSheet;
