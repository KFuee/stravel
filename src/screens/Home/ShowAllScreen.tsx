import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// services
import { getUserRecords } from '../../services/historyService';

// components
import Loading from '../../components/General/Loading';
import NoResultsBanner from '../../components/General/NoResultsBanner';
import SuggestedAttractionCard from '../../components/Explore/SuggestedAttractions/SuggestedAttractionCard';

// types
import type HistoryRecord from '../../types/HistoryRecord';
import type { HomeStackProps } from '../../navigation/HomeNavigator';
import { getUserFavourites } from '../../services/favouritesService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

function ShowAllScreen({ route }: any) {
  const { type } = route.params;

  // hooks
  const { authData } = useAuth();
  const { navigate } = useNavigation<HomeStackProps>();
  const userId = authData!.user.id;

  // states
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<HistoryRecord[]>([]);

  const fetchData = useCallback(async () => {
    try {
      let result;
      if (type === 'history') {
        result = await getUserRecords(userId);
      } else {
        result = await getUserFavourites(userId);
      }

      setAttractions(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [type, userId]);

  // effects
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

  if (attractions.length === 0) {
    return <NoResultsBanner />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={attractions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const { item: record } = item;

          return (
            <View style={{ paddingHorizontal: 16 }}>
              <SuggestedAttractionCard
                id={record.id}
                onPress={() =>
                  navigate('HomeAttraction', {
                    screen: 'AttractionLanding',
                    params: { id: record.id },
                  })
                }
                category={record.categories[0].title}
                title={record.name}
                rating={record.rating}
                image={record.image_url}
              />
            </View>
          );
        }}
        ListHeaderComponent={
          <Text style={styles.listTitle}>
            {attractions.length}{' '}
            {attractions.length === 1 ? 'resultado' : 'resultados'}
            {attractions.length === 1 ? ' encontrado' : ' encontrados'}
          </Text>
        }
      />
    </View>
  );
}

export default ShowAllScreen;
