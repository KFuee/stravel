import { View, Text, ScrollView, StyleSheet } from "react-native";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    title: "Hoteles",
    image: require("../../assets/images/hotels-category.jpg"),
  },
  {
    id: 2,
    title: "Restaurantes",
    image: require("../../assets/images/restaurants-category.jpg"),
  },
  {
    id: 3,
    title: "Museos",
    image: require("../../assets/images/museums-category.jpg"),
  },
  {
    id: 4,
    title: "Monumetos",
    image: require("../../assets/images/monuments-category.jpg"),
  },
  {
    id: 5,
    title: "Parques",
    image: require("../../assets/images/parks-category.jpg"),
  },
];

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
    marginVertical: 26,
  },
  title: {
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: 0.03,
    marginBottom: 16,
    fontVariant: ["small-caps"],
  },
  cardsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
});
