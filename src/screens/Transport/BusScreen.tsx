import { StyleSheet, View, Text } from 'react-native';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';

import SearchBusBanner from '../../components/Transport/Bus/SearchBanner';
import LineItem from '../../components/Transport/Bus/Lines/LineItem';

import { busLines } from '../../data/transportData';

const HEADER_HEIGHT = 150;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },

  stopsContainer: {
    padding: 16,
    backgroundColor: '#FFF',
  },

  linesContainer: {
    backgroundColor: '#FFF',
  },
});

const renderTabBar = (props: any) => (
  <MaterialTabBar
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    indicatorStyle={{ backgroundColor: '#FF4760' }}
    activeColor="#FF4760"
  />
);

const renderSeparator = () => <View style={styles.separator} />;

export default function BusScreen() {
  return (
    <Tabs.Container
      TabBarComponent={renderTabBar}
      renderHeader={SearchBusBanner}
      headerHeight={HEADER_HEIGHT}
      allowHeaderOverscroll={false}
      revealHeaderOnScroll
      snapThreshold={0.5}
    >
      <Tabs.Tab name="Paradas">
        {/* @ts-ignore */}
        <Tabs.ScrollView style={styles.stopsContainer} bounces={false}>
          <Text>Paradas</Text>
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="Líneas">
        <Tabs.FlatList
          bounces={false}
          data={busLines}
          renderItem={({ item }) =>
            LineItem({ id: item.id, title: item.title })
          }
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.linesContainer}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
}
