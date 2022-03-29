import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
  },

  stepIndicatorCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#FF4760',
    marginRight: 10,
  },

  stepIndicatorVerticalLine: {
    width: 2,
    height: 40,
    backgroundColor: '#000',
    marginRight: 10,
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    top: -0.5,
  },
});

export default function LineStopItem({ stop, isLast }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.stepIndicatorContainer}>
        <View style={styles.stepIndicatorCircle} />

        {!isLast && <View style={styles.stepIndicatorVerticalLine} />}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{stop.title}</Text>
      </View>
    </View>
  );
}
