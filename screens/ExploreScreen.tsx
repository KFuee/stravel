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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Explorar</Text>

        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />

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
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
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
