import { View, Text, StyleSheet, ImageBackground } from "react-native";

const SuggestedAttractionCard = ({ id, title, image, isLast }: any) => {
  return (
    <View
      style={[
        styles.container,
        id === 1 ? { marginLeft: 16 } : { marginLeft: 10 },
        !isLast ? { marginRight: 0 } : { marginRight: 16 },
      ]}
    >
      <ImageBackground source={image} style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SuggestedAttractionCard;

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 140,
    borderRadius: 5,
    backgroundColor: "red",
  },

  content: {
    flex: 1,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 5,
  },

  titleContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.03,
    color: "#fff",
  },
});
