import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// types
import type { ExploreStackParamList } from '../../../navigation/ExploreNavigator';

type AttractionScreenProps = NativeStackNavigationProp<
  ExploreStackParamList,
  'ExploreAttraction'
>;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

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

  bottomContainer: {
    flexDirection: 'row',
  },

  bottomLeft: {
    width: '75%',
    height: '100%',
  },

  title: {
    fontSize: 16,
    marginBottom: 4,
    lineHeight: 20,
    letterSpacing: 0.03,
  },

  distance: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.03,
    color: '#8E8E93',
  },

  bottomRight: {
    width: '25%',
    height: '100%',
    alignItems: 'flex-end',
  },

  ratingContainer: {
    width: 28,
    height: 28,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },

  rating: {
    fontSize: 12,
    letterSpacing: 0.03,
  },
});

function PlaceCard({ id, title, rating, image }: any) {
  const navigation = useNavigation<AttractionScreenProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ExploreAttraction', {
          screen: 'AttractionLanding',
          params: { id },
        })
      }
      activeOpacity={0.8}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.overlay}>
              <View style={styles.bookmarkContainer}>
                <FontAwesome name="bookmark-o" size={20} color="#FFF" />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomLeft}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.distance}>5-15 min - 0.5 km</Text>
          </View>

          <View style={styles.bottomRight}>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PlaceCard;
