const minTile = (latitude, longitude, zoom) => {
  const degToRad = deg => (deg * Math.PI) / 180;
  const mapSize = 256 << zoom;

  const xTile = Math.floor(((longitude + 180) / 360) * mapSize / 256);
  const yTile = Math.floor((1 - Math.log(Math.tan(degToRad(latitude)) + 1 / Math.cos(degToRad(latitude))) / Math.PI) / 2 * mapSize / 256);

  return { x: xTile, y: yTile };
};
