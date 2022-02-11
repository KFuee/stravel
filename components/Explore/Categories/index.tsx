import { View, Text, ScrollView, StyleSheet } from "react-native";

import { categories } from "../../../data/exploreData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.cardsContainer}
      >
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
              isLast={category.id === categories.length}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
  },

  title: {
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: 0.03,
    marginBottom: 16,
    textTransform: "uppercase",
  },

  cardsContainer: {
    flexDirection: "row",
  },
});
