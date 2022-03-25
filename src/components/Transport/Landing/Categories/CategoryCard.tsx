import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(150, 71, 96, 0.5)',
  },

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22.63,
    color: '#fff',
    textAlign: 'center',
  },
});

export default function CategoryCard({ style, title, image, route }: any) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={[style, styles.container]}
      onPress={() => navigate(route)}
      activeOpacity={0.8}
    >
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
