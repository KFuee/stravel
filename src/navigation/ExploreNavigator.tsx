import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import ExploreScreen from '../screens/Explore/ExploreScreen';
import CategoryScreen from '../screens/Explore/CategoryScreen';

// Navigators
import AttractionNavigator from './AttractionNavigator';

import type { AttractionStackParamList } from './AttractionNavigator';

// Definición de tipos para las rutas del stack
export type ExploreStackParamList = {
  ExploreLanding: undefined;
  ExploreCategory: { title: string };
  ExploreAttraction: {
    screen: string;
    params: AttractionStackParamList['AttractionLanding'];
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();

export default function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreLanding"
        component={ExploreScreen}
        options={{
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: 'Buscar',
            cancelButtonText: 'Cancelar',
            hideWhenScrolling: false,
          },
        }}
      />

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
