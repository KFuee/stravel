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

export const dataExample = {
  businesses: [
    {
      id: '2YO7rz0vG-LnWE7JPFzv3g',
      alias: 'taberna-1941-a-pulpería-zaragoza',
      name: 'Taberna 1941 A Pulpería',
      image_url:
        'https://s3-media3.fl.yelpcdn.com/bphoto/0YBq2WpbEiFby-2MR4DB_w/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.es/biz/taberna-1941-a-pulper%C3%ADa-zaragoza?adjust_creative=-xDc9VO5_KPJPAYbUQfzMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-xDc9VO5_KPJPAYbUQfzMQ',
      review_count: 3,
      categories: [
        {
          alias: 'tabernas',
          title: 'Tabernas',
        },
      ],
      rating: 4.5,
      coordinates: {
        latitude: 41.6519549822237,
        longitude: -0.880812965333462,
      },
      transactions: [],
      price: '€€',
      location: {
        address1: 'Calle Mártires, 2',
        address2: '',
        address3: null,
        city: 'Zaragoza',
        zip_code: '50001',
        country: 'ES',
        state: 'Z',
        display_address: ['Calle Mártires, 2', '50001 Zaragoza'],
      },
      phone: '+34876285139',
      display_phone: '876 28 51 39',
      distance: 681.1530419665753,
    },
    {
      id: 'WwrK_GSIybBJcirEHE9s9g',
      alias: 'la-clandestina-zaragoza',
      name: 'La Clandestina',
      image_url:
        'https://s3-media3.fl.yelpcdn.com/bphoto/ePX2uUaCr3isPL8IoUzFQQ/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.es/biz/la-clandestina-zaragoza?adjust_creative=-xDc9VO5_KPJPAYbUQfzMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-xDc9VO5_KPJPAYbUQfzMQ',
      review_count: 20,
      categories: [
        {
          alias: 'cafeteria',
          title: 'Cafetería',
        },
        {
          alias: 'gastropubs',
          title: 'Gastrobar',
        },
        {
          alias: 'cocktailbars',
          title: 'Coctelerías',
        },
      ],
      rating: 4.5,
      coordinates: {
        latitude: 41.6529322730358,
        longitude: -0.878116412295959,
      },
      transactions: [],
      price: '€€',
      location: {
        address1: 'Calle San Andres, 9',
        address2: '',
        address3: '',
        city: 'Zaragoza',
        zip_code: '50001',
        country: 'ES',
        state: 'Z',
        display_address: ['Calle San Andres, 9', '50001 Zaragoza'],
      },
      phone: '+34876281165',
      display_phone: '876 28 11 65',
      distance: 918.699709595491,
    },
    {
      id: '7_aaKFGLFkpS3TrUUtE4Qw',
      alias: 'los-vitorinos-zaragoza',
      name: 'Los Vitorinos',
      image_url:
        'https://s3-media4.fl.yelpcdn.com/bphoto/YO2bASx-XMmgect1FANF4Q/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.es/biz/los-vitorinos-zaragoza?adjust_creative=-xDc9VO5_KPJPAYbUQfzMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-xDc9VO5_KPJPAYbUQfzMQ',
      review_count: 22,
      categories: [
        {
          alias: 'tapas',
          title: 'Bares de tapas',
        },
      ],
      rating: 4.5,
      coordinates: {
        latitude: 41.654241,
        longitude: -0.877005,
      },
      transactions: [],
      price: '€',
      location: {
        address1: 'Calle José de la Hera, 6',
        address2: '',
        address3: '',
        city: 'Zaragoza',
        zip_code: '50001',
        country: 'ES',
        state: 'Z',
        display_address: ['Calle José de la Hera, 6', '50001 Zaragoza'],
      },
      phone: '+34976394213',
      display_phone: '976 39 42 13',
      distance: 1044.5060142553011,
    },
    {
      id: 'TaV_GhJdD-myLQinlAhXlA',
      alias: 'quema-zaragoza',
      name: 'Quema',
      image_url:
        'https://s3-media2.fl.yelpcdn.com/bphoto/FCTrnB6l7unF--zbrglcow/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.es/biz/quema-zaragoza?adjust_creative=-xDc9VO5_KPJPAYbUQfzMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-xDc9VO5_KPJPAYbUQfzMQ',
      review_count: 5,
      categories: [
        {
          alias: 'signature_cuisine',
          title: 'Cocina de autor',
        },
      ],
      rating: 4.5,
      coordinates: {
        latitude: 41.6514815035517,
        longitude: -0.890303626656532,
      },
      transactions: [],
      price: '€€',
      location: {
        address1: 'Paseo María Agustín, 20',
        address2: '',
        address3: '',
        city: 'Zaragoza',
        zip_code: '50004',
        country: 'ES',
        state: 'Z',
        display_address: ['Paseo María Agustín, 20', '50004 Zaragoza'],
      },
      phone: '+34976439214',
      display_phone: '976 43 92 14',
      distance: 111.29237351385333,
    },
    {
      id: 'wGCEUvuCEzN7NIjrNafYKQ',
      alias: 'meli-melo-zaragoza-2',
      name: 'Meli Melo',
      image_url:
        'https://s3-media2.fl.yelpcdn.com/bphoto/LVZlDsF0rEDdrA4nr7Z57w/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.es/biz/meli-melo-zaragoza-2?adjust_creative=-xDc9VO5_KPJPAYbUQfzMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-xDc9VO5_KPJPAYbUQfzMQ',
      review_count: 27,
      categories: [
        {
          alias: 'spanish',
          title: 'Español',
        },
        {
          alias: 'tapasmallplates',
          title: 'Tapas, pinchos o raciones',
        },
      ],
      rating: 4.5,
      coordinates: {
        latitude: 41.6533326,
        longitude: -0.8757656,
      },
      transactions: [],
      price: '€€',
      location: {
        address1: 'Calle Mayor, 45',
        address2: null,
        address3: null,
        city: 'Zaragoza',
        zip_code: '50001',
        country: 'ES',
        state: 'Z',
        display_address: ['Calle Mayor, 45', '50001 Zaragoza'],
      },
      phone: '+34976294695',
      display_phone: '976 29 46 95',
      distance: 1118.9287600622063,
    },
  ],
  total: 986,
  region: {
    center: {
      longitude: -0.8889731889860247,
      latitude: 41.651365271764284,
    },
  },
};
