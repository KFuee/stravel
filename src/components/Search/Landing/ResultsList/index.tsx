import { FlatList } from 'react-native';

// components
import SearchResultItem from './ResultItem';
import Separator from '../../../General/Separator';

function SearchResultsList({ items, type }: any) {
  return (
    <FlatList
      data={items}
      keyExtractor={(_item, index) => `search-result-${type}-${index}`}
      renderItem={({ item, index }: any) => (
        <SearchResultItem
          item={item}
          type={type === 'categories' ? 'category' : 'business'}
          isFirst={index === 0}
        />
      )}
      ItemSeparatorComponent={Separator}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default SearchResultsList;
