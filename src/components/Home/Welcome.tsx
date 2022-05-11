import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarContainer: {
    width: 65,
    height: 65,
    marginRight: 16,
    borderRadius: 50,
    backgroundColor: '#FF4760',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  avatarImage: {
    width: 50,
    height: 50,
    bottom: -7,
  },

  usernameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  qrIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

function Welcome({ username }: { username: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images/home/user.png')}
            style={styles.avatarImage}
          />
        </View>

        <View>
          <View style={styles.rowContainer}>
            <Text style={{ marginBottom: 4 }}>Bienvenid@ 👋</Text>
          </View>

          <Text style={styles.usernameText}>{username}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.qrIconContainer}
        onPress={() => {}}
        activeOpacity={0.8}
      >
        <View>
          <FontAwesome5 name="qrcode" size={24} color="#FF4760" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
