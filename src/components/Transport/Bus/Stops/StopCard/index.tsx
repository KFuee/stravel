import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import StopCardLines from './StopCardLines';

const styles = StyleSheet.create({
  item: {
    paddingBottom: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftContainer: {},

  title: {
    fontSize: 16,
    marginBottom: 8,
  },

  icon: {
    marginRight: 8,
  },
});

export default function BusStopCard({ stop }: any) {
  return (
    <View style={[styles.item, { paddingTop: stop.id === 1 ? 16 : 8 }]}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{stop.name}</Text>

        <StopCardLines lines={stop.lines} />
      </View>

      <View style={styles.icon}>
        <FontAwesome5 name="chevron-right" size={18} color="#FF4760" />
      </View>
    </View>
  );
}
