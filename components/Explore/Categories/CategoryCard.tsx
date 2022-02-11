import { View, Text, StyleSheet, ImageBackground } from "react-native";

const CategoryCard = ({ id, title, image, isLast }: any) => {
  return (
    <View
      style={[
        styles.container,
        id === 1 ? { marginLeft: 16 } : { marginLeft: 10 },
        !isLast ? { marginRight: 0 } : { marginRight: 16 },
      ]}
    >
      <ImageBackground source={image} style={styles.content} blurRadius={4}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
  },

  content: {
    flex: 1,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 5,
  },

  textContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 71, 96, 0.5)",
  },

  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22.63,
    color: "#fff",
  },
});
