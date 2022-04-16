import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AuthLanding from '../screens/Auth/AuthLanding';

// Definición de tipos para las rutas del stack
export type AuthStackParamList = {
  AuthLanding: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthLanding"
        component={AuthLanding}
        options={{
          title: 'UrbanMobility',
        }}
      />
    </AuthStack.Navigator>
  );
}
