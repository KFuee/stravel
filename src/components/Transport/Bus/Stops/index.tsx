import { StyleSheet, View } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

import { busStops } from '../../../../data/transportData';
import BusStopCard from './StopCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
});

export default function BusStops() {
  const renderItem = ({ item }: any) => <BusStopCard stop={item} />;

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <Tabs.FlatList
      bounces={false}
      data={busStops}
      renderItem={renderItem}
      keyExtractor={item => `stop-${item.id}`}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={styles.container}
    />
  );
}
