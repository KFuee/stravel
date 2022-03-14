import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
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
