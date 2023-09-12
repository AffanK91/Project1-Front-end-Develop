var apiKey = "de0dccced6542249dcb91b68c5f268dc"
var dropInput = document.querySelector(".queens")
var dropInput1 = document.querySelector(".brooklyn")
var dropInput2 = document.querySelector(".bronx")
var dropInput3 = document.querySelector(".ny")
var dropInput4 = document.querySelector(".si")
var searchBtn = document.querySelector(".search-btn")
var selectFormEl = document.querySelector("#select-form")


function userSelect() {
    var selectedCityEl = selectFormEl.value

    if (selectedCityEl === "1") {
        fetchBrooklyn()
        initMap(40.6501, -73.9496, 12);
    }
    if (selectedCityEl === "2") {
        fetchBronx()
         initMap(40.8273, -73.9236, 11);
    }
    if (selectedCityEl === "3") {
        fetchNy()
        initMap(40.7834, -73.9662, 12);
    }
    if (selectedCityEl === "4") {
        fetchSi()
        initMap(40.5835, -74.1496, 12);
    }
    if (selectedCityEl === "5") {
        fetchQueens()
        initMap(40.7498, -73.7976, 12);
    }
}





function handleBrooklyn() {
    var boro2 = dropInput1
    fetchBrooklyn(boro2);
}

function fetchBrooklyn(boro2) {
    var apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=brooklyn&appid=${apiKey}&units=imperial`
    fetch(apiUrl2)
        .then(function (response) {
            return response.json()

        }).then(function (data) {
            console.log(data)
            renderforcast(data.list)
            var lat = 40.6501
            var lon = -73.9496
            var GoogApiKey = "AIzaSyCJT-FjBOJ8g3SNHdBoxsr1kFGst1yMb-I"
            var map;
            var service;
            var infowindow;
    
            function initMap() {
                var sydney = new google.maps.LatLng(lat, lon);
    
                infowindow = new google.maps.InfoWindow();
    
                map = new google.maps.Map(
                    document.getElementById('map'), { center: sydney, zoom: 15 });
    
                var request = {
                    query: 'Museum of Contemporary Art Australia',
                    fields: ['name', 'geometry'],
                };
    
                var service = new google.maps.places.PlacesService(map);
    
                service.findPlaceFromQuery(request, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                        map.setCenter(results[0].geometry.location);
                    }
                });
            }
        })
    }





function handleBronx() {
    var boro3 = dropInput2
    fetchBrooklyn(boro3);
}

function fetchBronx(boro3) {
    var apiUrl3 = `https://api.openweathermap.org/data/2.5/forecast?q=bronx&appid=${apiKey}&units=imperial`
    fetch(apiUrl3).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(data)
            renderforcast(data.list)
            var lat = 40.8273
            var lon = -73.9236
            var GoogApiKey = "AIzaSyCJT-FjBOJ8g3SNHdBoxsr1kFGst1yMb-I"
            var map;
            var service;
            var infowindow;
    
            function initMap() {
                var sydney = new google.maps.LatLng(lat, lon);
    
                infowindow = new google.maps.InfoWindow();
    
                map = new google.maps.Map(
                    document.getElementById('map'), { center: sydney, zoom: 15 });
    
                var request = {
                    query: 'Museum of Contemporary Art Australia',
                    fields: ['name', 'geometry'],
                };
    
                var service = new google.maps.places.PlacesService(map);
    
                service.findPlaceFromQuery(request, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                        map.setCenter(results[0].geometry.location);
                    }
                });
            }
        })
    }





function handleNy() {
    var boro4 = dropInput3
    fetchNy(boro4);
}

function fetchNy(boro4) {
    var apiUrl4 = `https://api.openweathermap.org/data/2.5/forecast?q=manhattan&appid=${apiKey}&units=imperial`
    fetch(apiUrl4).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)
        renderforcast(data.list)
        var lat = 40.7834
        var lon = -73.9662
        var GoogApiKey = "AIzaSyCJT-FjBOJ8g3SNHdBoxsr1kFGst1yMb-I"
        var map;
        var service;
        var infowindow;

        function initMap() {
            var sydney = new google.maps.LatLng(lat, lon);

            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(
                document.getElementById('map'), { center: sydney, zoom: 15 });

            var request = {
                query: 'Museum of Contemporary Art Australia',
                fields: ['name', 'geometry'],
            };

            var service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                    map.setCenter(results[0].geometry.location);
                }
            });
        }
    })
}







function handleQueens() {
    var boro1 = dropInput
    fetchQueens(boro1);
}

function fetchQueens(boro1) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=queens&appid=${apiKey}&units=imperial`
    fetch(apiUrl).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)
        renderforcast(data.list)
        var lat = 40.7498
        var lon = -73.7976
        var GoogApiKey = "AIzaSyCJT-FjBOJ8g3SNHdBoxsr1kFGst1yMb-I"
        var map;
        var service;
        var infowindow;

        function initMap() {
            var sydney = new google.maps.LatLng(lat, lon);

            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(
                document.getElementById('map'), { center: sydney, zoom: 15 });

            var request = {
                query: 'Museum of Contemporary Art Australia',
                fields: ['name', 'geometry'],
            };

            var service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                    map.setCenter(results[0].geometry.location);
                }
            });
        }
    })
}







function handleSi() {
    var boro5 = dropInput4
    fetchNy(boro5);
}
function fetchSi(boro5) {
    var apiUrl5 = `https://api.openweathermap.org/data/2.5/forecast?q=Bloomfield&appid=${apiKey}&units=imperial`
    fetch(apiUrl5).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)
        renderforcast(data.list)
        var LatLng = 40.5835
        var lnglat = -74.1496
        var GoogApiKey = "AIzaSyCJT-FjBOJ8g3SNHdBoxsr1kFGst1yMb-I"
        var map;
        var service;
        var infowindow;

        function initMap() {
            var sydney = new google.maps.LatLng(LatLng, lonlat);

            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(
                document.getElementById('map'), { center: sydney, zoom: 15 });

            var request = {
                query: 'Museum of Contemporary Art Australia',
                fields: ['name', 'geometry'],
            };

            var service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                    map.setCenter(results[0].geometry.location);
                }
            });
        }
    })
}


searchBtn.addEventListener('click', userSelect)


function renderforcast(list) {
    // Clear existing content
    var forcastDiv = document.getElementById("forcast");
    forcastDiv.innerHTML = "";

    for (var i = 1; i < list.length; i += 44) {
        var dayDiv = document.createElement("div")
        var dateEl = document.createElement("h2")
        var icon = document.createElement("img")
        var tempEl = document.createElement("p")
        var HumEl = document.createElement("p")
        var wind = document.createElement("p")
        icon.src = `https://openweathermap.org/img/w/${list[i].weather[0].icon}.png`
        tempEl.textContent = list[i].main.temp
        dayDiv.append(dateEl, icon, tempEl, HumEl, wind)
        forcastDiv.append(dayDiv)
    }
}

let map;

async function initMap(latitude, longitude, zoomlength) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    
    center: { lat: latitude , lng: longitude },
    zoom: zoomlength,
  });
}

