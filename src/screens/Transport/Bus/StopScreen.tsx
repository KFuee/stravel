import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// services
import {
  getBusStopById,
  getBusStopArrivals,
} from '../../../services/transportService';

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
  const { stop: stopId }: { stop: string } = route.params;

  // states
  const [loading, setLoading] = useState(true);
  const [busStop, setBusStop] = useState<BusStop | null>(null);
  const [arrivals, setArrivals] = useState([] as BusStopArrival[]);

  // callbacks
  const fetchBusStop = useCallback(async () => {
    const response = await getBusStopById(stopId);
    setBusStop(response);
  }, [stopId]);

  const updateUpcomingArrivals = useCallback(async () => {
    const response = await getBusStopArrivals(stopId);
    setArrivals(response);

    setLoading(false);
  }, [stopId]);

  // effects
  useEffect(() => {
    fetchBusStop();
    updateUpcomingArrivals();
  }, [fetchBusStop, updateUpcomingArrivals]);

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
      <StopInfoBanner name={busStop?.title} id={busStop?.id} />

      <StopUpcomingArrivals arrivals={arrivals} />
    </ScrollView>
  );
}
