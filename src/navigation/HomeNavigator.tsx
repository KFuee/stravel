import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// components
import DeleteRecordsButton from '../components/Header/DeleteRecordsButton';

// screens
import HomeScreen from '../screens/Home/HomeScreen';
import ShowAllScreen from '../screens/Home/ShowAllScreen';
import UserProfile from '../screens/Home/UserProfile';

// navigators
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
  HomeShowAllHistoryRecords: {
    title: string;
    type: string;
  };
  HomeUserProfile: undefined;
};
export type HomeStackProps = NativeStackNavigationProp<HomeStackParamList>;

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const renderShowAllRightButtons = () => <DeleteRecordsButton />;

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeLanding"
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

      <HomeStack.Screen
        name="HomeShowAllHistoryRecords"
        component={ShowAllScreen}
        options={({ route }) => ({
          headerShown: true,
          headerBackTitle: 'Inicio',
          headerRight: () => renderShowAllRightButtons(),
          title: route.params.title,
        })}
      />

      <HomeStack.Screen
        name="HomeUserProfile"
        component={UserProfile}
        options={{
          presentation: 'modal',
          headerShown: true,
          headerTitle: 'Tu perfil de usuario',
        }}
      />
    </HomeStack.Navigator>
  );
}
