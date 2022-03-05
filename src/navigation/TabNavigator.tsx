import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';

import { StackHome, StackExplore } from './StackNavigator';

const BottomTabNavigator = createBottomTabNavigator();

function TabNavigator() {
  const renderTabBar = (props: BottomTabBarProps) => (
    <TabBar
      descriptors={props.descriptors}
      state={props.state}
      navigation={props.navigation}
    />
  );

  return (
    <BottomTabNavigator.Navigator
      initialRouteName="HomeTab"
      tabBar={props => renderTabBar(props)}
      screenOptions={{ headerShown: false }}
    >
      <BottomTabNavigator.Screen name="HomeTab" component={StackHome} />

      <BottomTabNavigator.Screen name="ExploreTab" component={StackExplore} />
    </BottomTabNavigator.Navigator>
  );
}

export default TabNavigator;
