let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.8338255914747, lng: -87.62620677388293 },
    zoom: 16,
  });
}

initMap();