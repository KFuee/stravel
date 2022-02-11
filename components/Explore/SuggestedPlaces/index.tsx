import { View, Text, StyleSheet } from "react-native";

import SuggestedPlaceCard from "./SuggestedPlaceCard";

const nearbyAttractions = [
  {
    id: 1,
    category: "Hoteles",
    title: "Hotel de la plaza",
    rating: 4.5,
    image: require("../../../assets/images/hotels-category.jpg"),
  },
  {
    id: 2,
    category: "Museo",
    title: "Museo de arte",
    rating: 3.4,
    image: require("../../../assets/images/museums-category.jpg"),
  },
];

const NearbyAttractions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares sugeridos</Text>

      {nearbyAttractions.map((nearbyAttraction) => {
        return (
          <SuggestedPlaceCard
            key={nearbyAttraction.id}
            id={nearbyAttraction.id}
            category={nearbyAttraction.category}
            title={nearbyAttraction.title}
            rating={nearbyAttraction.rating}
            image={nearbyAttraction.image}
          />
        );
      })}
    </View>
  );
};

export default NearbyAttractions;

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: 0.03,
    marginBottom: 16,
    textTransform: "uppercase",
  },
});
