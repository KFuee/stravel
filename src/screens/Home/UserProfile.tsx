import { StyleSheet, View } from 'react-native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import ActionButton from '../../components/General/ActionButton';
import UserDetails from '../../components/Home/UserProfile/UserDetails';
import ModifyData from '../../components/Home/UserProfile/ModifyData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },

  topContainer: {
    width: '100%',
    height: '75%',
    justifyContent: 'flex-start',
  },

  bottomContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
});

function UserProfile() {
  const { authData, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <UserDetails authData={authData} />

        <ModifyData />
      </View>

      <View style={styles.bottomContainer}>
        <ActionButton
          style={{ width: '100%' }}
          title="Cerrar sesión"
          onPress={() => signOut()}
        />
      </View>
    </View>
  );
}

export default UserProfile;
