import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

// contexts
import { useAuth } from '../contexts/AuthContext';

// components
import Welcome from '../components/Home/Welcome';
import UserHistory from '../components/Home/History';
import TransportTypes from '../components/Home/TransportTypes';
import UserFavourites from '../components/Home/Favourites';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function HomeScreen() {
  const { authData } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Welcome username={authData!.user.name} />

        <TransportTypes />

        <UserHistory />

        <UserFavourites />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
