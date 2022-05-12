export type Category = {
  id: number;
  title: string;
};

export const transportTypes = [
  { id: 1, iconName: 'bus', title: 'Аutobús' },
  { id: 2, iconName: 'tram', title: 'Tranvía' },
  { id: 3, iconName: 'taxi', title: 'Taxi' },
  { id: 4, iconName: 'bicycle', title: 'Bicicletas' },
];

export const categories: Category[] = [
  {
    id: 1,
    title: 'Todo',
  },
  {
    id: 2,
    title: 'Hoteles',
  },
  {
    id: 3,
    title: 'Compras',
  },
  {
    id: 4,
    title: 'Hostelería',
  },
  {
    id: 5,
    title: 'Arte',
  },
  {
    id: 6,
    title: 'Eventos',
  },
  {
    id: 7,
    title: 'Otros',
  },
];
