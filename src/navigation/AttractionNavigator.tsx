import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AttractionScreen from '../screens/AttractionScreen';

// Components
import BackButton from '../components/Header/BackButton';
import BookmarkButton from '../components/Header/BookmarkButton';
import CloseButton from '../components/Header/CloseButton';
import AttractionInfoModal from '../components/Attraction/Information/InfoModal';

export type AttractionStackParamList = {
  AttractionLanding: { id: string };
  AttractionInfo: { attraction: any };
};

const AttractionStack = createNativeStackNavigator<AttractionStackParamList>();

// Renderiza los botones de navegación en AttractionScreen
const renderAttractionLeftButtons = (navigation: any) => (
  <BackButton navigation={navigation} />
);

const renderAttractionRightButtons = (navigation: any) => (
  <BookmarkButton navigation={navigation} />
);

const renderAttractionInfoLeftButtons = (navigation: any) => {
  // Si el sistema es IOS, renderiza el botón de cerrar
  if (Platform.OS === 'ios') {
    return [<CloseButton key="close" navigation={navigation} />];
  }

  // Si el sistema es Android, renderiza el botón de volver
  return [<BackButton key="back" navigation={navigation} />];
};

export default function AttractionNavigator() {
  return (
    <AttractionStack.Navigator>
      <AttractionStack.Screen
        name="AttractionLanding"
        component={AttractionScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => renderAttractionLeftButtons(navigation),
          headerRight: () => renderAttractionRightButtons(navigation),
        })}
      />

      <AttractionStack.Screen
        name="AttractionInfo"
        component={AttractionInfoModal}
        options={({ navigation }) => ({
          presentation: 'modal',
          headerTransparent: true,
          title: '',
          headerLeft: () => renderAttractionInfoLeftButtons(navigation),
        })}
      />
    </AttractionStack.Navigator>
  );
}
