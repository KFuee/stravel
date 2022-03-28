import { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';

import BusStopInfoBanner from '../../../components/Transport/Bus/Stop/InfoBanner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusStopScreen({ route }: any) {
  const { stop } = route.params;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <BusStopInfoBanner name={stop.name} id={stop.id} />
    </ScrollView>
  );
}
