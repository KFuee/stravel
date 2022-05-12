import { StyleSheet, SafeAreaView } from 'react-native';

// contexts
import { useAuth } from '../contexts/AuthContext';

// components
import Welcome from '../components/Home/Welcome';
import UserHistory from '../components/Home/History';
import TransportTypes from '../components/Home/TransportTypes';

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
      <Welcome username={authData!.user.name} />

      <TransportTypes />

      <UserHistory />
    </SafeAreaView>
  );
}

export default HomeScreen;
