import { StyleSheet, SafeAreaView, View } from 'react-native';

// contexts
import { useAuth } from '../contexts/AuthContext';

// components
import Welcome from '../components/Home/Welcome';
import UserHistory from '../components/Home/History';

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
      <View
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <Welcome username={authData!.user.name} />
        <UserHistory />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
