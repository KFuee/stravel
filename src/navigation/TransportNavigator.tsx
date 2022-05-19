import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TransportScreen from '../screens/Transport/TransportScreen';
import BusScreen from '../screens/Transport/Bus/BusScreen';
import BusStopScreen from '../screens/Transport/Bus/StopScreen';
import BusLineScreen from '../screens/Transport/Bus/LineScreen';

// Components
// import BackButton from '../components/Header/BackButton';
// import ScanButton from '../components/Header/ScanButton';

// Definición de tipos para las rutas del stack
export type TransportStackParamList = {
  TransportLanding: undefined;
  TransportBus: undefined;
  TransportBusStop: { stop: any };
  TransportBusLine: { line: any };
};

const TransportStack = createNativeStackNavigator<TransportStackParamList>();

// Renderiza los botones de navegación en BusScreen
// const renderBusLeftButtons = (navigation: any) => (
//   <BackButton navigation={navigation} />
// );

// const renderBusRightButtons = (navigation: any) => (
//   <ScanButton navigation={navigation} />
// );

export default function TransportNavigator() {
  return (
    <TransportStack.Navigator initialRouteName="TransportLanding">
      <TransportStack.Screen
        name="TransportLanding"
        component={TransportScreen}
        options={{
          headerLargeTitle: true,
          title: 'Transporte',
          headerTransparent: false,
        }}
      />

      <TransportStack.Screen
        name="TransportBus"
        component={BusScreen}
        options={() => ({
          headerTransparent: false,
          title: 'Autobuses',
          headerBackTitle: 'Transporte',
          // headerLeft: () => renderBusLeftButtons(navigation),
          // headerRight: () => renderBusRightButtons(navigation),
          // headerSearchBarOptions: {
          //   placeholder: 'Buscar parada o línea',
          //   cancelButtonText: 'Cancelar',
          //   showCancelButton: true,
          //   showLoading: true,
          // },
        })}
      />

      <TransportStack.Screen
        name="TransportBusStop"
        component={BusStopScreen}
        options={{
          headerTransparent: false,
          title: 'Parada de autobús',
          headerBackTitleVisible: false,
        }}
      />

      <TransportStack.Screen
        name="TransportBusLine"
        component={BusLineScreen}
        options={{
          headerTransparent: false,
          title: 'Línea de autobús',
          headerBackTitleVisible: false,
        }}
      />
    </TransportStack.Navigator>
  );
}
