import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarContainer: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 100,
    backgroundColor: '#FF4760',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  avatarImage: {
    width: 100,
    height: 100,
    bottom: -14,
  },

  usernameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default function UserDetails({ authData }: any) {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/images/home/user.png')}
          style={styles.avatarImage}
        />
      </View>

      <View>
        <Text style={styles.usernameText}>{authData!.user.name}</Text>

        <Text style={{ fontSize: 16 }}>{authData!.user.email}</Text>
      </View>
    </View>
  );
}
