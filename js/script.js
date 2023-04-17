let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const myDorm = { lat: 41.8338255914747, lng: -87.62620677388293 };

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
}

initMap();