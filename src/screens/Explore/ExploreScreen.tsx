import { useState, useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

// components
import Loading from '../../components/General/Loading';
import Categories from '../../components/Explore/Categories';
import SuggestedAttractions from '../../components/Explore/SuggestedAttractions';
import SearchLandingScreen from '../Search/LandingScreen';

// types
import { Attraction } from '../../types/attractions/attraction';

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
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const suggestedAttractionsResponse = await axios.get(
        'http://192.168.1.15:3001/v1/places/search',
        {
          params: {
            latitude: '41.651365271764284',
            longitude: '-0.8889731889860247',
            limit: 5,
          },
        },
      );

      setAttractions(suggestedAttractionsResponse.data.businesses);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

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
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Categories />
      <SuggestedAttractions attractions={attractions} />
    </ScrollView>
  );
}

export default ExploreScreen;
