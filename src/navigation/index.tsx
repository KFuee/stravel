import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

// context
import { useAuth } from '../contexts/AuthContext';

// navigators
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

// components
import Loading from '../components/General/Loading';

const RootStack = createNativeStackNavigator();

const AppNavigationTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#FF4760',
  },
};

const prefix = Linking.createURL('/');

function RootNavigator() {
  // hooks
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Auth: {
          screens: {
            AuthResetPassword: 'auth/reset-password/:token',
          },
        },
      },
    },
  };

  return (
    <NavigationContainer
      // @ts-ignore
      // TODO: Fix this
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
