import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

// services
import { getAllBusStops } from '../../../../services/transportService';

// components
import BusStopItem from './StopItem';
import Separator from '../../../General/Separator';
import Loading from '../../../General/Loading';

// types
import type { BusStop } from '../../../../types/transport';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
});

export default function BusStops() {
  const [stops, setStops] = useState([] as BusStop[]);

  const fetchStops = useCallback(async () => {
    const allStops = await getAllBusStops();
    setStops(allStops);
  }, []);

  useEffect(() => {
    fetchStops();
  }, [fetchStops]);

  const renderItem = ({ item }: any) => <BusStopItem stop={item} />;

  return (
    <Tabs.FlatList
      bounces={false}
      data={stops}
      renderItem={renderItem}
      keyExtractor={item => `stop-${item.id}`}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={styles.container}
      ListEmptyComponent={<Loading />}
    />
  );
}
