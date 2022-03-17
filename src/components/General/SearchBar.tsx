import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF4760',
  },

  searchIconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 0.7,
    fontSize: 16,
  },

  clearIconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function SearchBar({ placeholder }: any) {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchIconContainer}>
        <FontAwesome5 name="search" size={20} color="#000" />
      </View>

      <TextInput
        value={searchPhrase}
        placeholder={placeholder}
        onChangeText={text => setSearchPhrase(text)}
        style={styles.input}
        placeholderTextColor="#000"
      />

      {searchPhrase.length > 0 && (
        <TouchableOpacity
          style={styles.clearIconContainer}
          onPress={() => setSearchPhrase('')}
        >
          <FontAwesome5 name="times" size={20} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
}
