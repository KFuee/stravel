import { View, StyleSheet } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

import LineItem from './LineItem';

import { busLines } from '../../../../data/transportData';

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

export default function BusLines() {
  const renderItem = ({ item }: any) => <LineItem line={item} />;

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <Tabs.FlatList
      bounces={false}
      data={busLines}
      renderItem={renderItem}
      keyExtractor={item => `line-${item.id}`}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={styles.container}
    />
  );
}
