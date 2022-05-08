import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { searchData } from '../data/exploreData';

// hooks
// import { useAuth } from '../contexts/AuthContext';

// screens
import ExploreScreen from '../screens/Explore/ExploreScreen';
import CategoryScreen from '../screens/Explore/CategoryScreen';

// navigators
import AttractionNavigator from './AttractionNavigator';

// types
import type { AttractionStackParamList } from './AttractionNavigator';

// Definición de tipos para las rutas del stack
export type ExploreStackParamList = {
  ExploreLanding: { searchBarFocused: boolean };
  ExploreCategory: { alias: string; title: string };
  ExploreAttraction: {
    screen: string;
    params: AttractionStackParamList['AttractionLanding'];
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();

export default function ExploreNavigator() {
  // hooks
  // const { authData } = useAuth();

  // states
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState({
    categories: [] as any,
    businesses: [] as any,
  });
  const [searchLoading, setSearchLoading] = useState(false);

  // handlers
  const onChangeText = async (event: { nativeEvent: { text: string } }) => {
    setSearchLoading(true);

    const { text } = event.nativeEvent;

    if (text.length === 0) {
      setSearchText('');
      setSearchResults({
        categories: [],
        businesses: [],
      });

      return;
    }

    try {
      setSearchText(text);

      // const response = await axios.get(
      //   `http://192.168.1.15:3001/v1/places/autocomplete`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${authData?.tokens.access}`,
      //     },
      //     params: {
      //       text,
      //       latitude: 41.651365271764284,
      //       longitude: -0.8889731889860247,
      //     },
      //   },
      // );

      setSearchResults(searchData);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setSearchLoading(false);
    }, 2000);
  };

  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreLanding"
        options={{
          headerLargeTitle: true,
          headerTransparent: false,
          title: 'Explorar',
          headerSearchBarOptions: {
            placeholder: 'Buscar por categoría o lugar',
            cancelButtonText: 'Cancelar',
            hideWhenScrolling: false,
            autoCapitalize: 'none',
            onFocus: () => setSearchBarFocused(true),
            onCancelButtonPress: () => setSearchBarFocused(false),
            onClose: () => setSearchBarFocused(false),
            onChangeText,
          },
        }}
      >
        {() => (
          <ExploreScreen
            searchBarFocused={searchBarFocused}
            searchText={searchText}
            searchResults={searchResults}
            searchLoading={searchLoading}
          />
        )}
      </ExploreStack.Screen>

      <ExploreStack.Screen
        name="ExploreCategory"
        component={CategoryScreen}
        options={props => ({
          title: props.route.params.title,
        })}
      />

      <ExploreStack.Screen
        name="ExploreAttraction"
        component={AttractionNavigator}
        options={{
          headerShown: false,
        }}
      />
    </ExploreStack.Navigator>
  );
}
