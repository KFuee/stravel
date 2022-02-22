import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/Explore/Category/CustomBottomSheet';

function CategoryScreen({ route }: any) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet category={route.params.title} />
    </GestureHandlerRootView>
  );
}

export default CategoryScreen;
