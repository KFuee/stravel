import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LinesList from '../../components/Transport/Bus/Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function StopsRouteTest() {
  return (
    <View style={[styles.container, { padding: 16 }]}>
      <Text>Route paradas</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function BusScreen() {
  const { width: screenWidth } = Dimensions.get('window');

  return (
    <Tab.Navigator
      initialLayout={{ width: screenWidth }}
      screenOptions={{
        tabBarActiveTintColor: '#FF4760',
        tabBarInactiveTintColor: '#000',
        tabBarIndicatorStyle: { backgroundColor: '#FF4760' },
      }}
    >
      <Tab.Screen
        name="stops"
        component={StopsRouteTest}
        options={{
          tabBarLabel: 'Paradas',
        }}
      />

      <Tab.Screen
        name="lines"
        component={LinesList}
        options={{
          tabBarLabel: 'Líneas',
        }}
      />
    </Tab.Navigator>
  );
}
