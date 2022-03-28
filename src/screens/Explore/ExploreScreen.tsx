import { ScrollView, StyleSheet } from 'react-native';

import Categories from '../../components/Explore/Categories';
import SuggestedAttractions from '../../components/Explore/SuggestedAttractions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function ExploreScreen() {
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
