import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../../navigation/StackNavigator';

type CategoryScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Category'
>;

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

function CategoryCard({ id, title, image, isLast }: any) {
  const navigation = useNavigation<CategoryScreenProps>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Category', { title });
      }}
    >
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
    </Pressable>
  );
}

export default CategoryCard;
