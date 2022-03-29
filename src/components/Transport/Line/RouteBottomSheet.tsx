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
  const data = useMemo(() => stops, [stops]);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const renderItem = useCallback(
    ({ item: stop, index: itemIndex }) => (
      <LineStopItem stop={stop} isLast={itemIndex === data.length - 1} />
    ),
    [data.length],
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
        {data.length} paradas de la línea {lineName}
      </Text>

      <BottomSheetFlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
}
