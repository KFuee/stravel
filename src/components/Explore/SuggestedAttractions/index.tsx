import { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

// components
import Loading from '../../../components/General/Loading';
import SuggestedAttractionCard from './SuggestedAttractionCard';

// types
import { Attraction } from '../../../types/attractions/attraction';

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
});

function SuggestedAttractions() {
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const attractionResponse = await axios.get(
        'http://192.168.1.15:3001/v1/places/search',
        {
          params: {
            latitude: '41.651365271764284',
            longitude: '-0.8889731889860247',
            limit: 5,
          },
        },
      );

      setAttractions(attractionResponse.data.businesses);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares sugeridos</Text>

      {attractions.map(attraction => (
        <SuggestedAttractionCard
          key={attraction.id}
          id={attraction.id}
          category={attraction.categories[0].title}
          title={attraction.name}
          rating={attraction.rating}
          image={attraction.image_url}
        />
      ))}
    </View>
  );
}

export default SuggestedAttractions;
