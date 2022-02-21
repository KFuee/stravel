import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/Explore/Category/CustomBottomSheet';

function CategoryScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet />
    </GestureHandlerRootView>
  );
}

export default CategoryScreen;
