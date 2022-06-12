import { StyleSheet, Text, View } from 'react-native';

// components
import UpcomingArrival from './UpcomingArrival';
import Separator from '../../../General/Separator';

// type
import type { BusStopArrival } from '../../../../types/transport';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  titleContainer: {
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default function StopUpcomingArrivals({
  arrivals,
}: {
  arrivals: BusStopArrival[];
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Próximas llegadas</Text>
        <Text>Basado en las señales de GPS</Text>
      </View>

      {arrivals.map((arrival, index) => (
        <UpcomingArrival
          key={arrival.line}
          arrival={arrival}
          renderSeparator={index + 1 !== arrivals.length && <Separator />}
        />
      ))}
    </View>
  );
}
