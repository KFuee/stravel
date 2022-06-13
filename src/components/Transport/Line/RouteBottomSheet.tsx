import { useMemo, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import LineStopItem from './LineStopItem';

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 16,
    marginHorizontal: 16,
  },

  contentContainer: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
});

export default function RouteBottomSheet({
  sheetRef,
  index,
  onChange,
  lineName,
  stops,
}: any) {
  // memoized values
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const renderItem = useCallback(
    ({ item: stop, index: itemIndex }) => (
      <LineStopItem stop={stop} isLast={itemIndex === stops.length - 1} />
    ),
    [stops.length],
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
        {stops.length} paradas de la línea {lineName}
      </Text>

      <BottomSheetFlatList
        data={stops}
        keyExtractor={(item: any) => stops.indexOf(item).toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
}
