import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
        <Image
          source={{
            uri: photos[0],
          }}
          style={styles.cover}
        />
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
      />
    </View>
  );
}

export default AttractionTopImage;
