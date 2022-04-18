import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useAuth } from '../../contexts/AuthContext';

import DimissKeyboard from '../../components/General/DimissKeyboard';
import CustomTextInput from '../../components/General/CustomTextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },

  topContainer: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  bottomContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },

  signInButton: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#FF4760',
    borderRadius: 5,
  },

  signInButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  forgotPasswordButton: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function AuthLoginScreen() {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <DimissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <CustomTextInput
            value={email}
            placeholder="Correo electrónico"
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <CustomTextInput
            value={password}
            placeholder="Contraseña"
            onChangeText={setPassword}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={{ width: '100%' }}>
            <View style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Iniciar sesión</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: '100%' }}
            onPress={() => handleSignIn()}
          >
            <View style={styles.forgotPasswordButton}>
              <Text>¿Has olvidado la contraseña?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DimissKeyboard>
  );
}

export default AuthLoginScreen;
