import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

function RootNavigator() {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={AppNavigationTheme}>
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
