import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Navigation Stacks
import HomeNavigator from './HomeNavigator';
import ExploreNavigator from './ExploreNavigator';
import TransportNavigator from './TransportNavigator';

export type TabNavigatorParamList = {
  Home: undefined;
  Explore: undefined;
  Transport: {
    screen: string;
    initial: boolean;
    params?: any;
  };
};
export type TabNavigatorProps =
  NativeStackNavigationProp<TabNavigatorParamList>;

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function TabNavigator() {
  const renderTabBarIcon = (
    name: React.ComponentProps<typeof FontAwesome5>['name'],
    size: number,
    focused: boolean,
    color: string,
  ) => (
    <FontAwesome5 name={name} size={size} color={focused ? '#FF4760' : color} />
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF4760',
        tabBarIcon: ({ size, focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'compass';
          } else {
            iconName = 'bus';
          }

          return renderTabBarIcon(iconName, size, focused, color);
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{ title: 'Inicio' }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{ title: 'Explorar' }}
      />

      <Tab.Screen
        name="Transport"
        component={TransportNavigator}
        options={{ title: 'Transporte' }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
