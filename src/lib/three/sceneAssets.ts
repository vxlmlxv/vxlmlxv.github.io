export const threeSceneAssets = {
  modelKind: "procedural-earth-scene",
  textures: {
    earthDiffuse: "/assets/textures/earth-atmos-2048.jpg",
    earthClouds: "/assets/textures/earth-clouds-1024.png",
  },
  geometry: {
    core: "SphereGeometry(1, 64, 64)",
    clouds: "SphereGeometry(1.015, 64, 64)",
    outerShell: "IcosahedronGeometry(1.4, 2)",
    rings: [
      "TorusGeometry(1.6, 0.005, 16, 100)",
      "TorusGeometry(1.8, 0.005, 16, 100)",
      "TorusGeometry(2.0, 0.005, 16, 100)",
    ],
    particles: "Points(1000)",
  },
} as const;
