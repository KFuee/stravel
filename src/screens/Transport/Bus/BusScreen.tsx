import { useState } from 'react';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import SearchBusBanner from '../../../components/Transport/Bus/SearchBanner';
import BusStops from '../../../components/Transport/Bus/Stops';

import BusLines from '../../../components/Transport/Bus/Lines';

const HEADER_HEIGHT = 150;

const renderTabBar = (props: any) => (
  <MaterialTabBar
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    indicatorStyle={{ backgroundColor: '#FF4760' }}
    activeColor="#FF4760"
  />
);

export default function BusScreen() {
  const [headerTitle, setHeaderTitle] = useState('Búsca tu parada');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Código de poste');

  const onTabChange = ({ tabName }: any) => {
    switch (tabName) {
      case 'Paradas':
        setHeaderTitle('Búsca tu parada');
        setSearchPlaceholder('Código de poste');
        break;
      case 'Líneas':
        setHeaderTitle('Búsca tu línea');
        setSearchPlaceholder('Número de línea');
        break;
      default:
        break;
    }
  };

  return (
    <Tabs.Container
      lazy
      TabBarComponent={renderTabBar}
      renderHeader={(props: any) => (
        <SearchBusBanner
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          title={headerTitle}
          searchPlaceholder={searchPlaceholder}
        />
      )}
      headerHeight={HEADER_HEIGHT}
      allowHeaderOverscroll={false}
      revealHeaderOnScroll
      snapThreshold={0.25}
      containerStyle={{ backgroundColor: '#FFF' }}
      initialTabName="Paradas"
      onTabChange={onTabChange}
    >
      <Tabs.Tab name="Paradas">
        <BusStops />
      </Tabs.Tab>

      <Tabs.Tab name="Líneas">
        <BusLines />
      </Tabs.Tab>
    </Tabs.Container>
  );
}
