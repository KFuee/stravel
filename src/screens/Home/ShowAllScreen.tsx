import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// services
import { getUserRecords } from '../../services/historyService';

// components
import Loading from '../../components/General/Loading';
import SuggestedAttractionCard from '../../components/Explore/SuggestedAttractions/SuggestedAttractionCard';

// types
import type HistoryRecord from '../../types/HistoryRecord';
import type { HomeStackProps } from '../../navigation/HomeNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },

  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

function ShowAllScreen() {
  // hooks
  const { authData } = useAuth();
  const { navigate } = useNavigation<HomeStackProps>();
  const userId = authData!.user.id;

  // states
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<HistoryRecord[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const userHistoryRecords = await getUserRecords(userId);

      setAttractions(userHistoryRecords);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

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
      <Text style={styles.listTitle}>
        {attractions.length} resultados encontrados
      </Text>

      <FlatList
        data={attractions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const { item: record } = item;

          return (
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
          );
        }}
      />
    </View>
  );
}

export default ShowAllScreen;
