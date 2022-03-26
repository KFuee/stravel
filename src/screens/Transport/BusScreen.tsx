import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import BusLines from '../../components/Transport/Bus/Lines';

import SearchBusBanner from '../../components/Transport/Bus/SearchBanner';

import BusStops from '../../components/Transport/Bus/Stops';

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
  return (
    <Tabs.Container
      TabBarComponent={renderTabBar}
      renderHeader={SearchBusBanner}
      headerHeight={HEADER_HEIGHT}
      allowHeaderOverscroll={false}
      revealHeaderOnScroll
      snapThreshold={0.5}
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
