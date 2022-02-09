import { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Platform } from "react-native";

import SearchBar from "../components/Explore/SearchBar";

const SearchScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Explorar</Text>

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
  },

  title: {
    marginVertical: 16,
    paddingHorizontal: 16,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 38,
    color: "#292C3D",
  },
});
