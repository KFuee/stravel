import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

import Categories from "../components/Explore/Categories";
import SuggestedPlaces from "../components/Explore/SuggestedPlaces";

const ExploreScreen = ({ navigation }: any) => {
  // Establece el título de la vista con useEfect
  useEffect(() => {
    navigation.setOptions({
      title: "Explorar",
    });
  }, []);

  return (
    <ScrollView
      // Mirar si hay mejor forma de hacelo en IOS
      contentInset={{ bottom: 49 }}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    >
      <Categories />

      <SuggestedPlaces />
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
