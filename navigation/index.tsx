import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";

const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          })}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={() => ({
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="search" color={color} />
            ),
          })}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
