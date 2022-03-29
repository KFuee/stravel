import { StyleSheet } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

import BusStopItem from './StopItem';
import Separator from '../../../General/Separator';

import { busStops } from '../../../../data/transportData';

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
  const renderItem = ({ item }: any) => <BusStopItem stop={item} />;

  return (
    <Tabs.FlatList
      bounces={false}
      data={busStops}
      renderItem={renderItem}
      keyExtractor={item => `stop-${item.id}`}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={styles.container}
    />
  );
}
