import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import WelcomeBanner from "../components/Home/WelcomeBanner";
import Suggestions from "../components/Home/Suggestions";

const HomeScreen = ({ navigation }: any) => {
  // Establece el título de la vista con useEfect
  useEffect(() => {
    navigation.setOptions({
      title: "Inicio",
    });
  }, []);

  return (
    <View style={styles.container}>
      <WelcomeBanner />

      <Suggestions />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
