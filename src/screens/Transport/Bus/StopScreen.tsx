import { StyleSheet, ScrollView } from 'react-native';

import CustomRefreshControl from '../../../components/General/CustomRefreshControl';
import StopInfoBanner from '../../../components/Transport/Stop/InfoBanner';
import StopUpcomingArrivals from '../../../components/Transport/Stop/UpcomingArrivals';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function BusStopScreen({ route }: any) {
  const { stop } = route.params;

  const updateUpcomingArrivals = () => {
    // console.log('Actualizando llegadas...');
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <CustomRefreshControl screenOnRefresh={updateUpcomingArrivals} />
      }
    >
      <StopInfoBanner name={stop.name} id={stop.id} />

      <StopUpcomingArrivals />
    </ScrollView>
  );
}
