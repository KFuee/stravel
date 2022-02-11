import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  // Establece el título de la vista con useEfect
  useEffect(() => {
    navigation.setOptions({
      title: "Inicio",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
