import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TransportCategories from '../../components/Transport/Landing/Categories';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function TransportView({ navigation }: any) {
  // Establece el título de la vista con useEffect
  useEffect(() => {
    navigation.setOptions({
      title: 'Transporte',
    });
  });

  return (
    <ScrollView style={styles.container}>
      <TransportCategories />
    </ScrollView>
  );
}
