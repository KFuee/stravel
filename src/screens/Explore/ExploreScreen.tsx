import { ScrollView, StyleSheet, View } from 'react-native';

// components
import Categories from '../../components/Explore/Categories';
import SuggestedAttractions from '../../components/Explore/SuggestedAttractions';
import SearchLandingScreen from '../Search/LandingScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
});

function ExploreScreen({
  searchBarFocused,
  searchText,
  searchResults,
  searchLoading,
}: any) {
  if (searchBarFocused) {
    return (
      <SearchLandingScreen
        searchText={searchText}
        searchResults={searchResults}
        searchLoading={searchLoading}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Categories />
        <SuggestedAttractions />
      </ScrollView>
    </View>
  );
}

export default ExploreScreen;
