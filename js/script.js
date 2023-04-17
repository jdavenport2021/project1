let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const myDorm = { lat: 41.8338255914747, lng: -87.62620677388293 };
  const family = { lat: 18.011021250600816, lng: -66.61488800120048 };

  map = new Map(document.getElementById("map"), {
    center: myDorm,
    zoom: 16,
  });

  new google.maps.Marker({
    position: myDorm,
    map,
    title: "Where I currently reside.",
    icon: "../media/home.png",
  });

  const visitCoordinates = [
    myDorm,
    { lat: 32.80429969121628, lng: -96.79682607489457 },
    { lat: 28.53567998613634, lng: -81.38136631828343 },
    family,
  ];
  const summerVisits = new google.maps.Polyline({
    path: visitCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    title: "Three places I would like to visit this summer."
  });

  summerVisits.setMap(map);
}

initMap();