import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import WelcomeBanner from '../components/Home/WelcomeBanner';
import Suggestions from '../components/Home/Suggestions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function HomeScreen({ navigation }: any) {
  // Establece el título de la vista con useEfect
  useEffect(() => {
    navigation.setOptions({
      title: 'Inicio',
    });
  });

  return (
    <ScrollView style={styles.container} bounces={false}>
      <WelcomeBanner />

      <Suggestions />
    </ScrollView>
  );
}

export default HomeScreen;
