import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// types
import type { HomeStackParamList } from '../../../navigation/HomeNavigator';

type AttractionScreenProps = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeAttraction'
>;

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 140,
    borderRadius: 5,
  },

  content: {
    flex: 1,
    overflow: 'hidden',
    resizeMode: 'cover',
    borderRadius: 5,
  },

  titleContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#FFF',
  },
});

function SuggestedAttractionCard({
  index,
  attractionId,
  title,
  image,
  isLast,
}: any) {
  const navigation = useNavigation<AttractionScreenProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HomeAttraction', {
          screen: 'AttractionLanding',
          params: { id: attractionId },
        })
      }
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.container,
          index === 1 ? { marginLeft: 16 } : { marginLeft: 10 },
          !isLast ? { marginRight: 0 } : { marginRight: 16 },
        ]}
      >
        <ImageBackground source={image} style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default SuggestedAttractionCard;
