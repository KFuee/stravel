import { Dimensions, View, StyleSheet, Pressable } from "react-native";

import TabBarIcon from "./TabBarIcon";

const { width } = Dimensions.get("window");

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
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
                <TabBarIcon name={label.toLowerCase()} isFocused={isFocused} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    marginHorizontal: width * 0.1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
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
