import { ImageBackground, View, Text, StyleSheet } from 'react-native';

import TopIcons from './TopIcons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 455,
  },

  contentContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },

  title: {
    width: '75%',
    left: 16,
    bottom: 24,
    position: 'absolute',

    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38,
    color: '#FFF',
  },
});

function WelcomeBanner() {
  return (
    <ImageBackground
      source={require('../../../assets/images/home-banner.png')}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <TopIcons />

        <Text style={styles.title}>¿Cual es tu próximo destino?</Text>
      </View>
    </ImageBackground>
  );
}

export default WelcomeBanner;
