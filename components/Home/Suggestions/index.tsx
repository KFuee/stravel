import { View, Text, StyleSheet } from "react-native";

import Categories from "./Categories";

const Suggestions = () => {
  return (
    <View>
      <Text style={styles.title}>Sugerencias</Text>

      <Categories />
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  title: {
    marginTop: 28,
    paddingHorizontal: 16,

    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: 0.03,
    marginBottom: 16,
    textTransform: "uppercase",
  },
});
