import { useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import WelcomeBanner from '../components/Home/WelcomeBanner';
import Suggestions from '../components/Home/Suggestions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

function HomeScreen() {
  const scroll = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scroll } } }],
    { useNativeDriver: false },
  );

  return (
    <View style={styles.container}>
      <WelcomeBanner scroll={scroll} />

      <Animated.ScrollView
        onScroll={onScroll}
        bounces={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Suggestions />
      </Animated.ScrollView>
    </View>
  );
}

export default HomeScreen;
