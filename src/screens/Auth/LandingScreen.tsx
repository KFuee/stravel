import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

// components
import ActionButton from '../../components/General/ActionButton';

import type { AuthStackParamList } from '../../navigation/AuthNavigator';

type AuthLandingScreenProps = NativeStackNavigationProp<AuthStackParamList>;

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
    paddingBottom: 8,
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

function AuthLandingScreen() {
  const { navigate } = useNavigation<AuthLandingScreenProps>();

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
        <ActionButton
          style={{ width: '100%', marginVertical: 16 }}
          title="Crear una cuenta"
          onPress={() => navigate('AuthRegister')}
        />

        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => navigate('AuthSignIn')}
        >
          <View style={styles.loginButton}>
            <Text>¿Ya tienes una cuenta? </Text>
            <Text style={styles.loginButtonText}>Inicia sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AuthLandingScreen;
