import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AuthLandingScreen from '../screens/Auth/LandingScreen';
import AuthLoginScreen from '../screens/Auth/LoginScreen';

// Definición de tipos para las rutas del stack
export type AuthStackParamList = {
  AuthLanding: undefined;
  AuthLogin: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthLanding"
        component={AuthLandingScreen}
        options={{
          title: 'UrbanMobility',
        }}
      />

      <AuthStack.Screen
        name="AuthLogin"
        component={AuthLoginScreen}
        options={{
          headerLargeTitle: true,
          title: 'Iniciar sesión',
          headerTransparent: false,
          headerBackTitle: 'Inicio',
        }}
      />
    </AuthStack.Navigator>
  );
}
