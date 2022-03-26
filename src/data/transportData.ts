export const categories: any[] = [
  {
    id: 1,
    title: 'Autobús',
    image: require('../assets/images/transport/categories/bus.jpeg'),
    route: 'TransportBus',
  },
  {
    id: 2,
    title: 'Tranvía',
    image: require('../assets/images/transport/categories/train.jpeg'),
    route: 'TransportTrain',
  },
  {
    id: 3,
    title: 'Taxi',
    image: require('../assets/images/transport/categories/taxi.jpeg'),
    route: 'TransportTaxi',
  },
  {
    id: 4,
    title: 'Bicicletas',
    image: require('../assets/images/transport/categories/bicycle.jpeg'),
    route: 'TransportBicycle',
  },
];

export const busLines: any[] = [
  {
    id: 1,
    name: '31',
  },
  {
    id: 2,
    name: '52',
  },
  {
    id: 3,
    name: '23',
  },
  {
    id: 4,
    name: '36',
  },
  {
    id: 5,
    name: '33',
  },
];

export const busStops: any[] = [
  {
    id: 1,
    name: 'Parada 1',
    lines: [busLines[0], busLines[1], busLines[2]],
  },
  {
    id: 2,
    name: 'Parada 2',
    lines: [busLines[0], busLines[2], busLines[4]],
  },
  {
    id: 3,
    name: 'Parada 3',
    lines: [busLines[0], busLines[3]],
  },
];
