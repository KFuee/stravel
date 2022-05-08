import { StyleSheet, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '30%',
    zIndex: 1,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

function AttractionTopImage({ image }: any) {
  if (image.length === 0) {
    return (
      <View style={styles.cover}>
        <View style={styles.centerContainer}>
          <FontAwesome5 name="eye-slash" size={32} color="#FFF" />
        </View>
      </View>
    );
  }

  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.cover}
    />
  );
}

export default AttractionTopImage;
