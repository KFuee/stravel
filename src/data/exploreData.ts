export const searchData = {
  categories: [
    {
      alias: 'restaurants',
      title: 'Restaurantes y bares',
    },
    {
      alias: 'artrestoration',
      title: 'Restauración de arte',
    },
    {
      alias: 'food_court',
      title: 'Zona de restaurantes',
    },
  ],
  businesses: [
    {
      id: 'kjt7ii8iw-ajtrVQlSOCDA',
      name: 'Plaza del Pilar',
    },
    {
      id: '4EQ5Oc5fpbhF0WPGdaj4Qg',
      name: 'Plaza de los Sitios',
    },
    {
      id: 'Qw3r6-PYiqmSOKrSwXVgQQ',
      name: 'Plaza de España',
    },
  ],
};

export const categories = [
  {
    id: 1,
    alias: 'hotels',
    title: 'Hoteles',
    image: require('../assets/images/hotels-category.jpg'),
  },
  {
    id: 2,
    alias: 'restaurants',
    title: 'Restaurantes',
    image: require('../assets/images/restaurants-category.jpg'),
  },
  {
    id: 3,
    alias: 'museums',
    title: 'Museos',
    image: require('../assets/images/museums-category.jpg'),
  },
  {
    id: 4,
    alias: 'landmarks',
    title: 'Monumetos',
    image: require('../assets/images/monuments-category.jpg'),
  },
  {
    id: 5,
    alias: 'parks',
    title: 'Parques',
    image: require('../assets/images/parks-category.jpg'),
  },
];

export const attractions = [
  {
    id: 1,
    category: 'Hoteles',
    mainCategory: 'Hoteles',
    title: 'Hotel de la plaza',
    description:
      'Hotel de la plaza, ubicado en el centro de la ciudad, ofrece una amplia variedad de servicios, como habitaciones, restaurantes, cafetería, bares, etc.',
    rating: 4.5,
    image: require('../assets/images/hotels-category.jpg'),
    coordinates: {
      latitude: 41.6573302141852,
      longitude: -0.8888,
    },
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
  },
  {
    id: 2,
    category: 'Museo',
    mainCategory: 'Arte',
    title: 'Museo de arte',
    description:
      'Hotel de la plaza, ubicado en el centro de la ciudad, ofrece una amplia variedad de servicios, como habitaciones, restaurantes, cafetería, bares, etc.',
    rating: 3.4,
    image: require('../assets/images/museums-category.jpg'),
    coordinates: {
      latitude: 41.6573302141852,
      longitude: -0.8782084695231732,
    },
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
  },
  {
    id: 3,
    category: 'Monumento',
    mainCategory: 'Arte',
    title: 'Monumento de la catedral',
    description:
      'Hotel de la plaza, ubicado en el centro de la ciudad, ofrece una amplia variedad de servicios, como habitaciones, restaurantes, cafetería, bares, etc.',
    rating: 4.5,
    image: require('../assets/images/monuments-category.jpg'),
    coordinates: {
      latitude: 41.646491844087684,
      longitude: -0.8877356758675421,
    },
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
  },
  {
    id: 4,
    category: 'Restaurante',
    mainCategory: 'Hostelería',
    title: 'Restaurante de la plaza',
    description:
      'Hotel de la plaza, ubicado en el centro de la ciudad, ofrece una amplia variedad de servicios, como habitaciones, restaurantes, cafetería, bares, etc.',
    rating: 4.5,
    image: require('../assets/images/restaurants-category.jpg'),
    coordinates: {
      latitude: 41.652546888229686,
      longitude: -0.8961606686675342,
    },
    address: 'Calle de la plaza, Madrid',
    phoneNumber: '+34 915 567 890',
    website: 'https://www.google.com',
  },
];
