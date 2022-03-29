import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TransportBadge from './TransportBadge';
import AnimatedParenthesis from './AnimatedParenthesis';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  destinationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
  },

  timesContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  timeLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeLeftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4760',
  },

  nextArrivalText: {
    fontSize: 12,
    color: '#FF4760',
  },
});

export default function UpcomingArrival({ arrival, renderSeparator }: any) {
  // states
  // Definición del estado de la animación de paréntesis
  // para que todos se animen al mismo tiempo
  const [currentParenthesis, setCurrentParenthesis] = useState(0);

  // effects
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentParenthesis <= 2) {
        setCurrentParenthesis(currentParenthesis + 1);
      } else {
        setCurrentParenthesis(0);
      }
    }, 1250);

    return () => clearInterval(interval);
  }, [currentParenthesis]);

  return (
    <View>
      <View style={styles.container}>
        <TransportBadge name={arrival.line.name} />

        <View style={styles.destinationContainer}>
          <Text style={{ fontSize: 16 }}>{arrival.destination}</Text>
        </View>

        <View style={styles.timesContainer}>
          <View style={styles.timeLeftContainer}>
            <AnimatedParenthesis
              currentParenthesis={currentParenthesis}
              setCurrentParenthesis={setCurrentParenthesis}
            />

            <Text style={styles.timeLeftText}>{arrival.timeLeft} min</Text>
          </View>

          <Text style={styles.nextArrivalText}>{arrival.nextArrival} min</Text>
        </View>
      </View>

      {renderSeparator}
    </View>
  );
}
