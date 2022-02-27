import { useCallback, useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import PlaceCard from './PlaceCard';

import { nearbyAttractions } from '../../../data/exploreData';

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    paddingBottom: 20,
  },

  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    // todo: comprobar
    marginBottom: 20,
    marginHorizontal: 16,
  },
});

function CustomBottomSheet({ category, onChange, currentIndex }: any) {
  const sheetRef = useRef<BottomSheet>(null);

  const data = useMemo(() => nearbyAttractions, []);

  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

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
    <BottomSheet
      ref={sheetRef}
      index={currentIndex}
      snapPoints={snapPoints}
      onChange={onChange}
      backgroundStyle={{ borderRadius: currentIndex !== 2 ? 16 : 0 }}
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
  );
}

export default CustomBottomSheet;
