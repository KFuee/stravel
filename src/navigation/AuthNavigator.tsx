import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AuthLandingScreen from '../screens/Auth/LandingScreen';
import AuthSignInScreen from '../screens/Auth/SignInScreen';
import AuthRegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';

// Definición de tipos para las rutas del stack
export type AuthStackParamList = {
  AuthLanding: undefined;
  AuthSignIn: undefined;
  AuthRegister: undefined;
  AuthForgotPassword: undefined;
  AuthResetPasswordModal: { token: string };
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthLanding"
        component={AuthLandingScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="AuthSignIn"
        component={AuthSignInScreen}
        options={{
          headerLargeTitle: true,
          title: 'Iniciar sesión',
          headerTransparent: false,
          headerBackTitle: 'Inicio',
        }}
      />

      <AuthStack.Screen
        name="AuthRegister"
        component={AuthRegisterScreen}
        options={{
          headerLargeTitle: true,
          title: 'Registrarse',
          headerTransparent: false,
          headerBackTitle: 'Inicio',
        }}
      />

      <AuthStack.Screen
        name="AuthForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerLargeTitle: true,
          title: 'Restablecer',
          headerTransparent: false,
          headerBackTitle: 'Inicio',
        }}
      />

      <AuthStack.Screen
        name="AuthResetPasswordModal"
        component={ResetPasswordScreen}
        options={{
          presentation: 'modal',
          title: 'Restablecer contraseña',
        }}
      />
    </AuthStack.Navigator>
  );
}
