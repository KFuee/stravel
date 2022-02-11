import { useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Categories />

        <SuggestedPlaces />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
