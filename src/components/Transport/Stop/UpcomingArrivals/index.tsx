import { StyleSheet, Text, View } from 'react-native';

import UpcomingArrival from './UpcomingArrival';
import Separator from '../../../General/Separator';

import { busArrivals } from '../../../../data/transportData';

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

export default function StopUpcomingArrivals() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Próximas llegadas</Text>
        <Text>Basado en las señales de GPS</Text>
      </View>

      {busArrivals.map(arrival => (
        <UpcomingArrival
          key={arrival.id}
          arrival={arrival}
          renderSeparator={arrival.id !== busArrivals.length && <Separator />}
        />
      ))}
    </View>
  );
}
