import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';

function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
