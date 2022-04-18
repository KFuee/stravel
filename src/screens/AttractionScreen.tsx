import { StyleSheet, View, Image } from 'react-native';

import AttractionInformation from '../components/Attraction/Information';

import { getAttraction } from '../data/exploreData';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },

  cover: {
    width: '100%',
    height: '30%',
    zIndex: 1,
  },

  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: '75%',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#FFF',
  },
});

function AttractionScreen({ route }: any) {
  const { id } = route.params;
  const attraction = getAttraction(id);

  return (
    <View style={styles.container}>
      <Image source={attraction?.image} style={styles.cover} />

      <View style={styles.contentContainer}>
        <AttractionInformation attraction={attraction} />
      </View>
    </View>
  );
}

export default AttractionScreen;
