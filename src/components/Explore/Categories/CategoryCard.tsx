import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// types
import type { ExploreStackParamList } from '../../../navigation/ExploreNavigator';

type CategoryScreenProps = NativeStackNavigationProp<ExploreStackParamList>;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
  },

  content: {
    flex: 1,
    overflow: 'hidden',
    resizeMode: 'cover',
    borderRadius: 5,
  },

  textContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(150, 71, 96, 0.5)',
  },

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22.63,
    color: '#fff',
  },
});

function CategoryCard({ alias, title, image, isLast }: any) {
  const { navigate } = useNavigation<CategoryScreenProps>();

  return (
    <TouchableOpacity
      onPress={() => navigate('ExploreCategory', { alias, title })}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.container,
          { marginLeft: 16 },
          !isLast ? { marginRight: 0 } : { marginRight: 16 },
        ]}
      >
        <ImageBackground source={image} style={styles.content} blurRadius={4}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryCard;
