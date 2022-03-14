import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { StackHome, StackExplore } from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const renderTabBarIcon = (
    name: string | undefined,
    size: number,
    focused: boolean,
    color: string,
  ) => (
    <FontAwesome5 name={name} size={size} color={focused ? '#FF4760' : color} />
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF4760',
        tabBarIcon: ({ size, focused, color }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ExploreTab') {
            iconName = 'search';
          }

          return renderTabBarIcon(iconName, size, focused, color);
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackHome}
        options={{ title: 'Home' }}
      />

      <Tab.Screen
        name="ExploreTab"
        component={StackExplore}
        options={{ title: 'Explorar' }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
