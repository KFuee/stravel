import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import ActionButton from '../../components/General/ActionButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
});

function UserProfile() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <Text>User Profile</Text>
      </View>

      <ActionButton title="Cerrar sesión" onPress={() => signOut()} />
    </View>
  );
}

export default UserProfile;
