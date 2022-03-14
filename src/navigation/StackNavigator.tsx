import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// General Screens
import AttractionView from '../screens/AttractionView';

// Home Screens
import HomeScreen from '../screens/HomeScreen';

// Explore Screens
import ExploreScreen from '../screens/Explore/ExploreScreen';
import CategoryScreen from '../screens/Explore/CategoryScreen';

// Attraction Components
import CloseButton from '../components/Header/Attraction/CloseButton';
import BackButton from '../components/Header/General/BackButton';
import BookmarkButton from '../components/Header/Attraction/BookmarkButton';
import AttractionInfoModal from '../components/Attraction/Information/InfoModal';

// Definición de tipos para las rutas del stack
export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Category: { title: string };
  Attraction: { id: string };
  AttractionInfo: { attraction: any };
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

const renderAttractionInfoLeftButtons = (navigation: any) => {
  // Si el sistema es IOS, renderiza el botón de cerrar
  if (Platform.OS === 'ios') {
    return [<CloseButton key="close" navigation={navigation} />];
  }

  // Si el sistema es Android, renderiza el botón de volver
  return [<BackButton key="back" navigation={navigation} />];
};

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

      <Stack.Screen
        name="AttractionInfo"
        component={AttractionInfoModal}
        options={({ navigation: attractionInfoNavigation }) => ({
          presentation: 'modal',
          headerTransparent: true,
          title: '',
          headerLeft: () =>
            renderAttractionInfoLeftButtons(attractionInfoNavigation),
        })}
      />
    </Stack.Navigator>
  );
}
