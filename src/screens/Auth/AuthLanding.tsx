import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#FFF',
  },

  topContainer: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
  },

  illustration: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },

  createAccountButton: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#FF4760',
    borderRadius: 5,
  },

  createAccountButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  loginButton: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FF4760',
    fontWeight: 'bold',
  },
});

export default function AuthLanding() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.illustration}
          source={require('../../assets/images/auth/landing-illustration.png')}
        />

        <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
          La mejor guía turística de Zaragoza
        </Text>
        <Text style={styles.subtitle}>Disfruta de la ciudad como nunca</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={{ width: '100%' }}>
          <View style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Crea una cuenta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '100%' }}>
          <View style={styles.loginButton}>
            <Text>¿Ya tienes una cuenta? </Text>
            <Text style={styles.loginButtonText}>Inicia sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
