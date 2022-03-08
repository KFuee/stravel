import { Text, View } from 'react-native';

function AttractionInfoModal({ route }: any) {
  const { attraction } = route.params;

  console.log(attraction);

  return (
    <View>
      <Text>Prueba</Text>
    </View>
  );
}

export default AttractionInfoModal;
