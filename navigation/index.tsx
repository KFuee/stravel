import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/TabBar";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

const Stack = createNativeStackNavigator();

const stackScreenOptions = {
  headerLargeTitle: true,
  headerTransparent: true,
  headerSearchBarOptions: {
    placeholder: "Buscar",
    cancelButtonText: "Cancelar",
  },
};

const StackHome = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="First" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const StackExplore = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="First" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="Home" component={StackHome} />
      <BottomTab.Screen name="Explore" component={StackExplore} />
    </BottomTab.Navigator>
  );
};
