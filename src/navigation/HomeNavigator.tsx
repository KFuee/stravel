import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// components
import DeleteRecordsButton from '../components/Header/DeleteRecordsButton';

// screens
import ScannerScreen from '../screens/ScannerScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ShowAllScreen from '../screens/Home/ShowAllScreen';
import UserProfile from '../screens/Home/UserProfile';

// navigators
import AttractionNavigator from './AttractionNavigator';

// types
import type { AttractionStackParamList } from './AttractionNavigator';

// Definición de tipos para las rutas del stack
export type HomeStackParamList = {
  HomeScanner: undefined;
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

const renderShowAllRightButtons = (type: string) => (
  <DeleteRecordsButton type={type} />
);

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeLanding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="HomeScanner"
        component={ScannerScreen}
        options={{
          headerShown: true,
          headerBackTitle: 'Inicio',
          headerTitle: 'Escaner QR',
        }}
      />

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
          headerRight: () => renderShowAllRightButtons(route.params.type),
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
