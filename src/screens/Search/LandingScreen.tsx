import { StyleSheet, Text, View } from 'react-native';

// components
import SearchResultsLoader from '../../components/Search/Landing/ResultsLoader';
import SearchResultsList from '../../components/Search/Landing/ResultsList';
import SearchNoResults from '../../components/Search/Landing/NoResults';
import YelpLogo from '../../components/Search/Landing/YelpLogo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#FFF',
  },

  title: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
});

function SearchLandingScreen({
  searchText,
  searchLoading,
  searchResults,
}: any) {
  return (
    <View style={[styles.container, { padding: 16 }]}>
      {searchText.length > 0 && (
        <View>
          <View>
            <Text style={styles.title}>Categorías</Text>

            <View style={{ height: 140 }}>
              {searchLoading ? (
                <SearchResultsLoader />
              ) : (
                <SearchResultsList
                  items={searchResults.categories}
                  type="categories"
                />
              )}
            </View>
          </View>

          <View>
            <Text style={[styles.title, { marginTop: 16 }]}>Lugares</Text>
            <View style={{ height: 140 }}>
              {searchLoading ? (
                <SearchResultsLoader />
              ) : (
                <SearchResultsList
                  items={searchResults.businesses}
                  type="businesses"
                />
              )}
            </View>
          </View>
        </View>
      )}

      {searchResults.categories.length === 0 &&
        searchResults.businesses.length === 0 &&
        searchText.length === 0 && <SearchNoResults />}

      {searchText.length > 0 && <YelpLogo />}
    </View>
  );
}

export default SearchLandingScreen;
