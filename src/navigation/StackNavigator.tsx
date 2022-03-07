import { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// General Screens
import AttractionView from '../screens/AttractionView';

// Home Screens
import HomeScreen from '../screens/HomeScreen';

// Explore Screens
import ExploreScreen from '../screens/Explore/ExploreScreen';
import CategoryScreen from '../screens/Explore/CategoryScreen';

// Attraction Components
import BackButton from '../components/Header/General/BackButton';
import BookmarkButton from '../components/Header/Attraction/BookmarkButton';

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

// Renderiza los botones de navegación en AttractionView
const renderAttractionLeftButtons = (navigation: any) => (
  <BackButton navigation={navigation} />
);

const renderAttractionRightButtons = (navigation: any) => (
  <BookmarkButton navigation={navigation} />
);

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
        options={({ navigation: attractionNavigation }) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => renderAttractionLeftButtons(attractionNavigation),
          headerRight: () => renderAttractionRightButtons(attractionNavigation),
        })}
      />
    </Stack.Navigator>
  );
}
