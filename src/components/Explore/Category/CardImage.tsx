import { StyleSheet, View, ImageBackground } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 153,
    marginBottom: 8,
  },

  image: {
    flex: 1,
    overflow: 'hidden',
    resizeMode: 'cover',
    borderRadius: 5,
    position: 'relative',
  },

  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookmarkContainer: {
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 252, 253, 0.2)',
    borderRadius: 80,
  },
});

function CategoryCardImage({ image }: any) {
  return (
    <View style={styles.imageContainer}>
      {image ? (
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.overlay}>
            <View style={styles.bookmarkContainer}>
              <FontAwesome name="bookmark-o" size={20} color="#FFF" />
            </View>
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.image}>
          <View style={styles.overlay}>
            <View style={styles.centerContainer}>
              <FontAwesome5 name="eye-slash" size={32} color="#FFF" />
            </View>

            <View style={styles.bookmarkContainer}>
              <FontAwesome name="bookmark-o" size={20} color="#FFF" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default CategoryCardImage;
