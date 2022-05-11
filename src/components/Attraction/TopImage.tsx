import { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ImageGallery } from '@georstat/react-native-image-gallery';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  content: {
    flex: 1,
    overflow: 'hidden',
    resizeMode: 'cover',
    borderRadius: 5,
    position: 'relative',
  },

  imagesIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagesText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

function AttractionTopImage({ photos }: { photos: string[] }) {
  // states
  const [galleryOpened, setGalleryOpened] = useState(false);

  const openGallery = () => setGalleryOpened(true);
  const closeGallery = () => setGalleryOpened(false);

  if (photos.length === 0) {
    return (
      <View style={styles.cover}>
        <View style={styles.centerContainer}>
          <FontAwesome5 name="eye-slash" size={32} color="#FFF" />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={openGallery}>
        <View style={styles.cover}>
          <ImageBackground
            source={{
              uri: photos[0],
            }}
            style={styles.content}
          >
            <View style={styles.centerContainer}>
              <View style={styles.imagesIndicatorContainer}>
                <FontAwesome5 name="image" size={32} color="#FFF" />
                <Text style={styles.imagesText}>
                  {photos.length} {photos.length > 1 ? 'imágenes' : 'imagen'}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

      <ImageGallery
        close={closeGallery}
        isOpen={galleryOpened}
        images={photos.map((photo: any, index: number) => ({
          id: index,
          url: photo,
        }))}
        renderHeaderComponent={() => (
          <SafeAreaView style={{ padding: 16 }}>
            <TouchableOpacity onPress={closeGallery}>
              <FontAwesome5 name="times" size={24} color="#FFF" />
            </TouchableOpacity>
          </SafeAreaView>
        )}
        thumbColor="#FF4760"
      />
    </View>
  );
}

export default AttractionTopImage;
