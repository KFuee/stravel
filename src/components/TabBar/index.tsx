import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import TabBarIcon from "./TabBarIcon";

// icon typeof FontAwesome
interface Tab {
  name: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
}

const tabs: Tab[] = [
  { name: "HomeTab", icon: "home" },
  { name: "ExploreTab", icon: "search" },
  { name: "Routes", icon: "street-view" },
];

const TabBar = ({ state, navigation }: any) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.container}>
        {tabs.map((tab, index) => {
          const { name, icon }: Tab = tab;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: name,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(name);
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
                  <TabBarIcon name={icon} isFocused={isFocused} />
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
    backgroundColor: "#FFF",
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
    marginVertical: 6,
    alignItems: "center",
    borderRadius: 1,
    borderColor: "#333B42",
  },
});
