// eslint-disable-next-line import/prefer-default-export
export function metersToDistance(meters: number) {
  if (meters < 1000) {
    // Devuelve una cadena con el número de metros sin decimales
    return `${Math.round(meters)} metros`;
  }

  return `${(meters / 1000).toFixed(2)} kilometros`;
}
