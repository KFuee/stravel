import { StyleSheet, SafeAreaView } from 'react-native';

// contexts
import { useAuth } from '../contexts/AuthContext';

// components
import Welcome from '../components/Home/Welcome';

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
    </SafeAreaView>
  );
}

export default HomeScreen;
