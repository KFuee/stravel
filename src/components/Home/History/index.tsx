import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// hooks
import { useAuth } from '../../../contexts/AuthContext';

// services
import { getAllRecords } from '../../../services/historyService';

// components
import Loading from '../../General/Loading';
import HistoryRecordCard from './HistoryRecordCard';

// types
import HistoryRecord from '../../../types/historyRecord';

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },

  showAllContainer: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 71, 96, 0.1)',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
});

function UserHistory() {
  // hooks
  const { authData } = useAuth();

  // states
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState<HistoryRecord[]>(
    {} as HistoryRecord[],
  );

  // callbacks
  const fetchData = useCallback(async () => {
    try {
      const userHistoryRecords = await getAllRecords(authData!.user.id, 5);

      setRecords(userHistoryRecords);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [authData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tu historial</Text>

        <View style={styles.showAllContainer}>
          <Text style={{ color: '#FF4760', fontWeight: 'bold' }}>Ver todo</Text>
        </View>
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            overflow: 'visible',
          }}
        >
          {records.map((record, index) => (
            <HistoryRecordCard
              key={record.item.id}
              image={record.item.image_url}
              location={record.item.location.address1}
              title={record.item.name}
              isLast={index === records.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default UserHistory;
