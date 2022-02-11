import { View, Text, StyleSheet } from "react-native";

import { nearbyAttractions } from "../../../data/exploreData";
import SuggestedPlaceCard from "./SuggestedPlaceCard";

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
