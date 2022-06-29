const options = {
  // Required: API key
  key: '', // REPLACE WITH YOUR KEY !!!

  // Put additional console output
  verbose: true,
// 名古屋駅を中心に表示
  lat: 35.170736,
  lon: 136.882104,
  zoom: 6,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});