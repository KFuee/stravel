import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/TabBar";

import { StackHome, StackExplore } from "./StackNavigator";

const BottomTabNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="HomeTab"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <BottomTabNavigator.Screen name="HomeTab" component={StackHome} />

      <BottomTabNavigator.Screen name="ExploreTab" component={StackExplore} />
    </BottomTabNavigator.Navigator>
  );
};

export default TabNavigator;
