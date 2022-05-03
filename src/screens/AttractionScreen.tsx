import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import axios from 'axios';

// components
import Loading from '../components/General/Loading';
import AttractionInformation from '../components/Attraction/Information';
import AttractionActionButtons from '../components/Attraction/ActionButtons';
import AttractionReviews from '../components/Attraction/Reviews';

// types
import { Attraction } from '../types/attractions/attraction';
import { Review } from '../types/attractions/review';

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

  // states
  const [loading, setLoading] = useState(true);
  const [attraction, setAttraction] = useState<Attraction>({} as Attraction);
  const [reviews, setReviews] = useState<Review[]>({} as Review[]);

  // callbacks
  const fetchData = useCallback(async () => {
    try {
      const attractionResponse = await axios.get(
        'http://192.168.1.15:3001/v1/places/business',
        { params: { id } },
      );

      const reviewsResponse = await axios.get(
        'http://192.168.1.15:3001/v1/places/reviews',
        { params: { id } },
      );

      setAttraction(attractionResponse.data);
      setReviews(reviewsResponse.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  // effects
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: attraction.image_url,
        }}
        style={styles.cover}
      />

      <ScrollView style={styles.contentContainer}>
        <AttractionInformation attraction={attraction} />

        <AttractionActionButtons />

        <AttractionReviews reviews={reviews} />
      </ScrollView>
    </View>
  );
}

export default AttractionScreen;
