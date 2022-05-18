import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';

// contexts
import { useAuth } from '../contexts/AuthContext';

// services
import { createRecord } from '../services/historyService';

// components
import Loading from '../components/General/Loading';
import AttractionInformation from '../components/Attraction/Information';
import AttractionActionButtons from '../components/Attraction/ActionButtons';
import AttractionReviews from '../components/Attraction/Reviews';
import AttractionTopImage from '../components/Attraction/TopImage';

// types
import { Attraction } from '../types/attractions/attraction';
import { Review } from '../types/attractions/review';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },

  cover: {
    width: '100%',
    height: '30%',
    zIndex: 1,
    backgroundColor: '#747474',
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

  const { authData } = useAuth();
  const userId = authData!.user.id;

  // states
  const [loading, setLoading] = useState(true);
  const [attraction, setAttraction] = useState<Attraction>({} as Attraction);
  const [reviews, setReviews] = useState<Review[]>({} as Review[]);

  const apiCalls = useCallback(async () => {
    try {
      const attractionResponse = await axios.get(
        'http://localhost:3001/v1/places/business',
        { params: { id } },
      );

      const reviewsResponse = await axios.get(
        'http://localhost:3001/v1/places/reviews',
        { params: { id } },
      );

      setAttraction(attractionResponse.data);
      setReviews(reviewsResponse.data);

      setLoading(false);

      await createRecord(userId, 'attraction', attractionResponse.data);
    } catch (err) {
      console.log(err);
    }
  }, [id, userId]);

  // effects
  useEffect(() => {
    apiCalls();
  }, [apiCalls]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <AttractionTopImage photos={attraction.photos} />

      <ScrollView style={styles.contentContainer}>
        <AttractionInformation attraction={attraction} />

        <AttractionActionButtons />

        <AttractionReviews reviews={reviews} />
      </ScrollView>
    </View>
  );
}

export default AttractionScreen;
