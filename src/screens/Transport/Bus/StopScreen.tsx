import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// services
import { getBusStopArrivals } from '../../../services/transportService';

// components
import CustomRefreshControl from '../../../components/General/CustomRefreshControl';
import StopInfoBanner from '../../../components/Transport/Stop/InfoBanner';
import StopUpcomingArrivals from '../../../components/Transport/Stop/UpcomingArrivals';

// types
import type { BusStop, BusStopArrival } from '../../../types/transport';
import Loading from '../../../components/General/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusStopScreen({ route }: any) {
  const { stop }: { stop: BusStop } = route.params;

  // states
  const [loading, setLoading] = useState(true);
  const [arrivals, setArrivals] = useState([] as BusStopArrival[]);

  // callbacks
  const updateUpcomingArrivals = useCallback(async () => {
    const response = await getBusStopArrivals(stop.id);
    setArrivals(response);
    setLoading(false);
  }, [stop.id]);

  // effects
  useEffect(() => {
    updateUpcomingArrivals();
  }, [updateUpcomingArrivals]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <CustomRefreshControl screenOnRefresh={updateUpcomingArrivals} />
      }
    >
      <StopInfoBanner name={stop.title} id={stop.id} />

      <StopUpcomingArrivals arrivals={arrivals} />
    </ScrollView>
  );
}
