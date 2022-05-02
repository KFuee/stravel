import { StyleSheet, View } from 'react-native';

// components
import AttractionActionButton from './Button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

function AttractionActionButtons() {
  return (
    <View style={styles.container}>
      <View style={{ width: '25%', height: 45 }}>
        <AttractionActionButton icon="directions" />
      </View>

      <View style={{ width: '73%', height: 45 }}>
        <AttractionActionButton text="Compartir" icon="share" />
      </View>
    </View>
  );
}

export default AttractionActionButtons;
