import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';

// Navigators
import AttractionNavigator from './AttractionNavigator';

// types
import type { AttractionStackParamList } from './AttractionNavigator';

// Definición de tipos para las rutas del stack
export type HomeStackParamList = {
  HomeLanding: undefined;
  HomeAttraction: {
    screen: string;
    params: AttractionStackParamList['AttractionLanding'];
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeLanding" component={HomeScreen} />

      <HomeStack.Screen
        name="HomeAttraction"
        component={AttractionNavigator}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
