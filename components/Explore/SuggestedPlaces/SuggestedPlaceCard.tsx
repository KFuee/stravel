import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import StarRating from "../../General/StarRating";

const NearbyAttractionCard = ({
  category,
  title,
  rating,
  image,
  isLast,
}: any) => {
  return (
    <View
      style={[
        styles.container,
        isLast && (Platform.OS === "web" || Platform.OS === "android")
          ? { marginBottom: 100 }
          : { marginBottom: 14 },
      ]}
    >
      <ImageBackground source={image} style={styles.content}>
        <Text style={styles.category}>{category}</Text>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.bookmarkContainer}>
          <FontAwesome name="bookmark-o" size={20} color="#FFF" />
        </View>

        <View style={styles.ratingContainer}>
          <StarRating rating={rating} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default NearbyAttractionCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 153,
  },

  content: {
    flex: 1,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 5,
    position: "relative",
  },

  category: {
    position: "absolute",
    zIndex: 1,
    left: 12,
    top: 12,
    height: 25,
    padding: 4,
    textAlign: "center",
    backgroundColor: "#FF4760",
    borderRadius: 3,
    overflow: "hidden",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 18,
    letterSpacing: 0.03,
    textTransform: "uppercase",
    color: "#fff",
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

  ratingContainer: {
    left: 12,
    bottom: 12,
    position: "absolute",
  },

  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 18,
    letterSpacing: 0.03,
    color: "#FFF",
  },

  bookmarkContainer: {
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(252, 252, 253, 0.2)",
    borderRadius: 80,
  },
});
