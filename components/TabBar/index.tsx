import { View, StyleSheet, Pressable } from "react-native";

import TabBarIcon from "./TabBarIcon";

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
              key={index}
              style={[styles.itemsContainer, { borderRightWidth: 0 }]}
            >
              <Pressable
                onPress={onPress}
                style={{
                  width: 68,
                  height: 48,
                  borderRadius: 100,
                  backgroundColor: isFocused ? "#FF4760" : "#FFFFFF",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    padding: 15,
                  }}
                >
                  <TabBarIcon
                    name={label.toLowerCase()}
                    isFocused={isFocused}
                  />
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,

    shadowColor: "#000",
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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 1,
    borderColor: "#333B42",
  },
});
