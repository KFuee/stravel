import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  Keyboard,
} from 'react-native';

import SearchBar from '../../General/SearchBar';

const HEADER_HEIGHT = 150;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(150, 71, 96, 0.5)',
  },

  searchBarTitle: {
    marginBottom: 8,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38,
    color: '#FFF',
  },
});

export default function SearchBusBanner({ title, searchPlaceholder }: any) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/transport/categories/bus.jpeg')}
          style={styles.image}
        >
          <View style={styles.bottomContainer}>
            <Text style={styles.searchBarTitle}>{title}</Text>

            <SearchBar placeholder={searchPlaceholder} />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
