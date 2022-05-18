import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// services
import { getUserRecords } from '../../services/historyService';

// components
import SuggestedAttractionCard from '../../components/Explore/SuggestedAttractions/SuggestedAttractionCard';

// types
import type HistoryRecord from '../../types/HistoryRecord';

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

export default function ShowAllScreen() {
  // hooks
  const { authData } = useAuth();
  const userId = authData!.user.id;

  // states
  const [attractions, setAttractions] = useState<HistoryRecord[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const userHistoryRecords = await getUserRecords(userId);

      setAttractions(userHistoryRecords);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
