import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.03,
    textTransform: 'uppercase',
    paddingBottom: 16,
    textAlign: 'center',
  },

  warningContainer: {
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
  },

  secondaryText: {
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.03,
    textAlign: 'center',
  },
});

export default function NoItemsFound() {
  return (
    <View style={styles.container}>
      <View style={styles.warningContainer}>
        <View style={{ padding: 16 }}>
          <Text style={styles.titleText}>
            No tienes ningún registro en el historial o favoritos
          </Text>

          <Text style={styles.secondaryText}>
            ¡Dirígete a la pantalla de explorar para descubir nuevos lugares!
          </Text>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../assets/images/illustrations/no-results-home.png')}
            style={{ width: '100%', height: 200 }}
          />
        </View>
      </View>
    </View>
  );
}
