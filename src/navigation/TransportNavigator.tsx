import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TransportScreen from '../screens/Transport/TransportScreen';
import BusScreen from '../screens/Transport/BusScreen';

// Components
import BackButton from '../components/Header/BackButton';
import ScanButton from '../components/Header/ScanButton';

const TransportStack = createNativeStackNavigator();

// Renderiza los botones de navegación en BusScreen
const renderBusLeftButtons = (navigation: any) => (
  <BackButton navigation={navigation} />
);

const renderBusRightButtons = (navigation: any) => (
  <ScanButton navigation={navigation} />
);

export default function TransportNavigator() {
  return (
    <TransportStack.Navigator>
      <TransportStack.Screen
        name="TransportLanding"
        component={TransportScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: false,
        }}
      />

      <TransportStack.Screen
        name="TransportBus"
        component={BusScreen}
        options={({ navigation }) => ({
          title: 'Autobuses',
          headerLeft: () => renderBusLeftButtons(navigation),
          headerRight: () => renderBusRightButtons(navigation),
        })}
      />
    </TransportStack.Navigator>
  );
}
