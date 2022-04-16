import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from '../screens/Auth/LoginScreen';

// Definición de tipos para las rutas del stack
export type AuthStackParamList = {
  AuthLogin: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthLogin"
        component={LoginScreen}
        options={{
          title: 'Autenticación',
        }}
      />
    </AuthStack.Navigator>
  );
}
