import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home Screens
import HomeScreen from '../screens/HomeScreen';

// Explore Screens
import ExploreScreen from '../screens/Explore/ExploreScreen';
import CategoryScreen from '../screens/Explore/CategoryScreen';

// Definición de tipos para las rutas del stack
export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Category: { title: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackHome() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export function StackExplore() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: false,
          headerSearchBarOptions: {
            placeholder: 'Buscar',
            cancelButtonText: 'Cancelar',
          },
        }}
      />

      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
