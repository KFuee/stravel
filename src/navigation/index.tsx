import {
  NavigationContainer,
  DefaultTheme,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import linking from './linkingConfig';

// context
import { useAuth } from '../contexts/AuthContext';

// navigators
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

// components
import Loading from '../components/General/Loading';

// types
import type { AuthStackParamList } from './AuthNavigator';

// Definición de tipos para las rutas del stack
export type RootStackParamList = {
  Tab: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

const RootStack = createNativeStackNavigator();

const AppNavigationTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#FF4760',
  },
};

function RootNavigator() {
  // hooks
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Loading />}
      theme={AppNavigationTheme}
    >
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {authData ? (
          <RootStack.Screen name="Tab" component={TabNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
