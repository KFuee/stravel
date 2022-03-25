import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Categories from '../../components/Explore/Categories';
import SuggestedAttractions from '../../components/Explore/SuggestedAttractions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function ExploreScreen({ navigation }: any) {
  // Establece el título de la vista con useEffect
  useEffect(() => {
    navigation.setOptions({
      title: 'Explorar',
    });
  });

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Categories />

      <SuggestedAttractions />
    </ScrollView>
  );
}

export default ExploreScreen;
