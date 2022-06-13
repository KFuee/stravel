import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

// services
import { getAllBusLines } from '../../../../services/transportService';

// components
import LineItem from './LineItem';
import Separator from '../../../General/Separator';

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
  const [lines, setLines] = useState([] as string[]);

  // callbacks
  const fetchStops = useCallback(async () => {
    const allLines = await getAllBusLines();
    setLines(allLines);
  }, []);

  // effects
  useEffect(() => {
    fetchStops();
  }, [fetchStops]);

  const renderItem = ({ item }: any) => <LineItem line={item} />;

  return (
    <Tabs.FlatList
      bounces={false}
      data={lines}
      renderItem={renderItem}
      keyExtractor={item => `line-${item}`}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={styles.container}
    />
  );
}
