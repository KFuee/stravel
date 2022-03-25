import { useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';

import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import LinesList from '../../components/Transport/Bus/Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function StopsRouteTest({ height }: any) {
  return (
    <View style={[styles.container, { padding: 16, height }]}>
      <Text>Route paradas</Text>
    </View>
  );
}

const renderScene = SceneMap({
  stops: StopsRouteTest,
  lines: LinesList,
});

const renderTabBar = (props: any) => (
  <TabBar
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    indicatorStyle={{ backgroundColor: '#FF4760' }}
    style={{ backgroundColor: '#FFF' }}
    renderLabel={({ route, focused }) => (
      <Text style={{ color: focused ? '#FF4760' : '#000', fontSize: 16 }}>
        {route.title}
      </Text>
    )}
  />
);

export default function BusScreen() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'stops', title: 'Paradas' },
    { key: 'lines', title: 'Líneas' },
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: SCREEN_WIDTH }}
      />
    </View>
  );
}
