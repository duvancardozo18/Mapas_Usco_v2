const isMobile =
  typeof globalThis === "undefined" ? false : globalThis.innerWidth < 640;

const config = {
  geoCodingApi: "https://nominatim.openstreetmap.org",
  routingApi: "https://router.project-osrm.org/route/v1",
  mapConfig: {
    center: [-75.300_137, 2.942_752],
    zoom: isMobile ? 16.2 : 16.9,
    bearing: 60,
    pitch: 40,
    maxBounds: [
      [-75.304, 2.941],
      [-75.297, 2.9449],
    ],
  } as maplibregl.MapOptions,
  mapStyles: {
    light: "https://tiles.openfreemap.org/styles/bright",
    dark: "/styles/dark/style.json",
  },
};

export default config;
