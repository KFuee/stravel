import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function TransportView({ navigation }: any) {
  // Establece el título de la vista con useEffect
  useEffect(() => {
    navigation.setOptions({
      title: 'Transporte',
    });
  });

  return (
    <View>
      <Text>TransportView</Text>
    </View>
  );
}
