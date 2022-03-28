import { useState, useCallback, useEffect } from 'react';
import { RefreshControl } from 'react-native';

export default function CustomRefreshControl({ screenOnRefresh }: any) {
  // states
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdateDate, setLastUpdateDate] = useState(new Date());
  const [lastUpdateMinutes, setLastUpdateMinutes] = useState(0);

  // Obtiene la última fecha de actualización en minutos
  const getLastUpdateTime = () => {
    const now = new Date();

    const diff = now.getTime() - lastUpdateDate.getTime();
    const diffMinutes = Math.round(((diff % 86400000) % 3600000) / 60000);

    setLastUpdateMinutes(diffMinutes);
  };

  // Actualiza la fecha de actualización
  const onRefresh = useCallback(() => {
    screenOnRefresh();
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setLastUpdateDate(new Date());
      setLastUpdateMinutes(0);
    }, 1000);
  }, [screenOnRefresh]);

  // Comprobar hace cuánto se actualizó la última vez cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      getLastUpdateTime();
    }, 60000);

    return () => clearInterval(interval);
  });

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      title={`Última actualización: ${
        lastUpdateMinutes === 0
          ? 'hace un momento'
          : `hace ${lastUpdateMinutes} ${
              lastUpdateMinutes === 1 ? 'minuto' : 'minutos'
            }`
      }`}
    />
  );
}
