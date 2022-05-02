import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import axios from 'axios';

// components
import Loading from '../components/General/Loading';
import AttractionInformation from '../components/Attraction/Information';

// types
import { Attraction } from '../types/attractions';

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

  const [loading, setLoading] = useState(true);
  const [attraction, setAttraction] = useState<Attraction>({} as Attraction);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.15:3001/v1/places/business',
        { params: { id } },
      );

      setAttraction(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

      <View style={styles.contentContainer}>
        <AttractionInformation attraction={attraction} />
      </View>
    </View>
  );
}

export default AttractionScreen;
