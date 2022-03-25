import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigationTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#FF4760',
  },
};

function RootNavigator() {
  return (
    <NavigationContainer theme={AppNavigationTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Tab" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
