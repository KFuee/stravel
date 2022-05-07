import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import CategoryCardImage from './CardImage';

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
        <CategoryCardImage image={image} />

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
