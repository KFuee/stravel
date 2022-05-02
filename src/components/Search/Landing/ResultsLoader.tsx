import { Dimensions } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

function SearchResultsLoader() {
  const { width } = Dimensions.get('window');
  const widthFinal = width - 32;

  return (
    <ContentLoader
      speed={2}
      width={widthFinal}
      height={140}
      foregroundColor="#CAC9C9"
    >
      <Rect x="0" y="8" rx="5" ry="5" width={widthFinal} height="20" />
      <Rect x="0" y="60" rx="5" ry="5" width={widthFinal} height="20" />
      <Rect x="0" y="112" rx="5" ry="5" width={widthFinal} height="20" />
    </ContentLoader>
  );
}

export default SearchResultsLoader;
