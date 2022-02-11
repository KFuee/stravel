import { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";

import SearchBar from "../components/Explore/SearchBar";
import Categories from "../components/Explore/Categories";
import SuggestedPlaces from "../components/Explore/SuggestedPlaces";

const ExploreScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: "#FFF" }}
    >
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.title}>Explorar</Text>
      </SafeAreaView>

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

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

  titleContainer: {
    flex: 1,
    paddingTop: Platform.OS === "web" || "android" ? 25 : 0,
  },

  title: {
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 38,
    color: "#292C3D",
  },
});
