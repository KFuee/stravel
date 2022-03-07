import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

// General Screens
import AttractionView from '../screens/AttractionView';

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
  Attraction: { id: string };
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

export function StackExplore({ navigation, route }: any) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'Category') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });

      return;
    }

    navigation.setOptions({ tabBarStyle: { display: 'flex' } });
  }, [route, navigation]);

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
        options={props => ({
          title: props.route.params.title,
        })}
      />

      <Stack.Screen
        name="Attraction"
        component={AttractionView}
        options={({ navigation: attractionNavigator }) => ({
          headerTransparent: true,
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                attractionNavigator.goBack();
              }}
              // Circulo con icono de flecha hacia atrás
              style={{
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 80,
                backgroundColor: '#FFF',
              }}
            >
              <FontAwesome name="arrow-left" size={20} />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                attractionNavigator.goBack();
              }}
              // Circulo con icono de marcador
              style={{
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 80,
                backgroundColor: '#FFF',
              }}
            >
              <FontAwesome name="bookmark-o" size={20} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
