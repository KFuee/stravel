import { ImageBackground, StyleSheet, Animated, View } from 'react-native';

import TopIcons from './TopIcons';

const headerHeight = 350;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  contentContainer: {
    width: '100%',
    height: '100%',
  },

  title: {
    width: '75%',
    paddingLeft: 16,
    position: 'absolute',
    bottom: 24,

    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38,
    color: '#FFF',
  },
});

function WelcomeBanner({ scroll }: any) {
  const containerHeaderHeight = scroll.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [headerHeight, 100],
    extrapolate: 'clamp',
  });

  const titleOpacity = scroll.interpolate({
    inputRange: [0, headerHeight / 1.75],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const backgroundColor = scroll.interpolate({
    inputRange: [0, headerHeight / 3, headerHeight / 2, headerHeight],
    outputRange: [
      'rgba(150, 71, 96, 0.5)',
      'rgba(150, 71, 96, 0.6)',
      'rgba(150, 71, 96, 0.7)',
      '#FF4760',
    ],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, { height: containerHeaderHeight }]}
    >
      <ImageBackground
        source={require('../../../assets/images/home-banner.jpg')}
        style={styles.image}
      >
        <Animated.View style={[styles.contentContainer, { backgroundColor }]}>
          <View style={{ paddingHorizontal: 16 }}>
            <TopIcons />
          </View>

          <Animated.Text
            style={[styles.title, { opacity: titleOpacity }]}
            numberOfLines={2}
          >
            ¿Cual es tu próximo destino?
          </Animated.Text>
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
}

export default WelcomeBanner;
