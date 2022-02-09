import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.sBarContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => props.setClicked(true)}
        />

        <FontAwesome
          name="search"
          size={20}
          color="#FF4760"
          style={{
            marginLeft: 10,
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "91.8%",
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
  sBarContainer: {
    height: 59,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "#E0E2EB",
  },
  input: {
    fontSize: 20,
    width: "90%",
  },
});
