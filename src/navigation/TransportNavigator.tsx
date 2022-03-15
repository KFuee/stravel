import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TransportScreen from '../screens/Transport/TransportScreen';

const TransportStack = createNativeStackNavigator();

export default function TransportNavigator() {
  return (
    <TransportStack.Navigator>
      <TransportStack.Screen
        name="TransportLanding"
        component={TransportScreen}
      />
    </TransportStack.Navigator>
  );
}
