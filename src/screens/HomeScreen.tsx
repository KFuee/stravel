import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

// contexts
import { useAuth } from '../contexts/AuthContext';

// services
import { getAllRecords } from '../services/historyService';

// components
import Loading from '../components/General/Loading';
import Welcome from '../components/Home/Welcome';
import UserHistory from '../components/Home/History';
import TransportTypes from '../components/Home/TransportTypes';
import UserFavourites from '../components/Home/Favourites';

// types
import HistoryRecord from '../types/HistoryRecord';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function HomeScreen() {
  // hooks
  const { authData } = useAuth();

  // data
  const userId = authData!.user.id;

  // states
  const [loading, setLoading] = useState(true);
  const [historyRecords, setHistoryRecords] = useState<HistoryRecord[]>(
    {} as HistoryRecord[],
  );

  // callbacks
  const fetchData = useCallback(async () => {
    try {
      const userHistoryRecords = await getAllRecords(userId, 5);

      setHistoryRecords(userHistoryRecords);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Espera a que se cargue la información
  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Welcome username={authData!.user.name} />

        <TransportTypes />

        <UserHistory records={historyRecords} />

        <UserFavourites />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
