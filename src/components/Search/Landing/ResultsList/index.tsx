import { FlatList } from 'react-native';

// components
import SearchResultItem from './ResultItem';
import Separator from '../../../General/Separator';

function SearchResultsList({ items, type }: any) {
  return (
    <FlatList
      data={items}
      keyExtractor={(_item, index) => `search-result-${type}-${index}`}
      renderItem={({ item }: any) => (
        <SearchResultItem
          title={type === 'categories' ? item.title : item.name || item.text}
        />
      )}
      ItemSeparatorComponent={Separator}
      scrollEnabled={false}
    />
  );
}

export default SearchResultsList;
