import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 153,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function NoRecordsFound({ icon, title }: { icon: string; title: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome5 name={icon} size={24} color="#FF4760" />
        <Text style={{ marginLeft: 16 }}>{title}</Text>
      </View>
    </View>
  );
}

export default NoRecordsFound;
