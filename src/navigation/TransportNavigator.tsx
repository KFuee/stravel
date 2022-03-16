import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TransportScreen from '../screens/Transport/TransportScreen';
import BusScreen from '../screens/Transport/BusScreen';

const TransportStack = createNativeStackNavigator();

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
        options={{
          title: 'Autobús',
        }}
      />
    </TransportStack.Navigator>
  );
}
