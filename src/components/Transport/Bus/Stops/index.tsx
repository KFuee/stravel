import { StyleSheet, Text } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
});

export default function BusStops() {
  return (
    // @ts-ignore
    <Tabs.ScrollView style={styles.container} bounces={false}>
      <Text>Paradas</Text>
    </Tabs.ScrollView>
  );
}
