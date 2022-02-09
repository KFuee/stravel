import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
