import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { URL, URLSearchParams } from 'react-native-url-polyfill';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  textContainer: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderTopColor: '#FF4760',
    borderTopWidth: 6,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(false as boolean | null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  });

  const handleBarCodeScanned = ({ type, data }: any) => {
    if (type === 'org.iso.QRCode') {
      const url = new URL(data);
      const urlParams = new URLSearchParams(url.search);

      if (urlParams.has('poste')) {
        console.log(urlParams.get('poste'));
      }
    }

    setScanned(true);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.infoContainer}>
        <Text>Solicitando permiso para el escaneo...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.infoContainer}>
        <Text>
          Debes aceptar el permiso de acceso a la cámara para usar esta
          funcionalidad
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: '75%' }}
      />

      <View style={styles.textContainer}>
        <Text>
          Escanéa el código QR de una parada de autobús para obtener información
          detallada sobre la misma
        </Text>
      </View>
    </View>
  );
}
