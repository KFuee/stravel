import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import DimissKeyboard from '../../components/General/DimissKeyboard';
import CustomTextInput from '../../components/General/CustomTextInput';
import ActionButton from '../../components/General/ActionButton';

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
});

function AuthRegisterScreen() {
  // states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useContexts
  const { register } = useAuth();

  const handleRegister = () => {
    register(name, email, password);
  };

  return (
    <DimissKeyboard>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <CustomTextInput
            value={name}
            placeholder="Nombre completo"
            onChangeText={setName}
            autoCapitalize="none"
          />

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
          <ActionButton
            style={{ width: '100%' }}
            title="Registrarse"
            onPress={handleRegister}
          />
        </View>
      </View>
    </DimissKeyboard>
  );
}

export default AuthRegisterScreen;
