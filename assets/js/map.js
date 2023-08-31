let map;

async function initMap() {
  const { Map, Marker } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 40.712776, lng: -74.005974 }, // Centered on New York City
    zoom: 12, // Appropriate zoom level for New York City
    restriction: {
      latLngBounds: {
        north: 40.917577, // Northernmost point of New York City
        south: 40.477398, // Southernmost point of New York City
        west: -74.259090, // Westernmost point of New York City
        east: -73.700180, // Easternmost point of New York City
      },
      strictBounds: true, // Prevent users from panning outside the bounds
    },
  });

  // Sample data representing locations and whether they are parks or not
  const locations = [
    { lat: 40.712776, lng: -74.005974, isPark: true }, // New York City (park)
    { lat: 40.758896, lng: -73.985130, isPark: false }, // Times Square (not a park)
    // Add more locations here...
  ];

  locations.forEach(location => {
    if (location.isPark) {
      new Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        // You can customize the marker icon for parks here
        // icon: 'path-to-park-icon.png',
      });
    }
  });
}

initMap();
