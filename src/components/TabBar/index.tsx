import { ComponentProps } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import TabBarIcon from './TabBarIcon';

// icon typeof FontAwesome
interface Tab {
  id: number;
  name: string;
  icon: ComponentProps<typeof FontAwesome>['name'];
}

const tabs: Tab[] = [
  { id: 1, name: 'HomeTab', icon: 'home' },
  { id: 2, name: 'ExploreTab', icon: 'search' },
  { id: 3, name: 'Routes', icon: 'street-view' },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#FFF',
    borderRadius: 100,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 4,
  },

  itemsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 1,
    borderColor: '#333B42',
  },
});

function TabBar({ descriptors, state, navigation }: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.container}>
        {tabs.map((tab, index) => {
          const { name, icon }: Tab = tab;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: name,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(name);
            }
          };

          return (
            <View
              key={tab.id}
              style={[styles.itemsContainer, { borderRightWidth: 0 }]}
            >
              <Pressable
                onPress={onPress}
                style={{
                  width: 68,
                  height: 48,
                  borderRadius: 100,
                  backgroundColor: isFocused ? '#FF4760' : '#FFF',
                }}
              >
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    padding: 15,
                  }}
                >
                  <TabBarIcon name={icon} isFocused={isFocused} />
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;
