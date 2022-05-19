import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// services
import { getUserRecords } from '../../services/historyService';
import { getUserFavourites } from '../../services/favouritesService';

// components
import Loading from '../../components/General/Loading';
import Welcome from '../../components/Home/Welcome';
import UserHistory from '../../components/Home/History';
import TransportTypes from '../../components/Home/TransportTypes';
import UserFavourites from '../../components/Home/Favourites';
import NoItemsFound from '../../components/Home/NoItemsFound';

// types
import type HistoryRecord from '../../types/HistoryRecord';
import type Favourite from '../../types/favourite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function HomeScreen() {
  // hooks
  const { authData } = useAuth();
  const userId = authData!.user.id;

  // states
  const [loading, setLoading] = useState(true);
  const [historyRecords, setHistoryRecords] = useState<HistoryRecord[]>(
    {} as HistoryRecord[],
  );
  const [favourites, setFavourites] = useState<Favourite[]>({} as Favourite[]);

  // callbacks
  const fetchData = useCallback(async () => {
    try {
      const userHistoryRecords = await getUserRecords(userId, 5);

      const userFavourites = await getUserFavourites(userId, 5);

      setHistoryRecords(userHistoryRecords);
      setFavourites(userFavourites);

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
      <ScrollView style={{ flex: 1 }}>
        <Welcome username={authData!.user.name} />

        <TransportTypes />

        {historyRecords.length > 0 || favourites.length > 0 ? (
          <View>
            <UserHistory records={historyRecords} />

            <UserFavourites favourites={favourites} />
          </View>
        ) : (
          <NoItemsFound />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
