var apiKey = "de0dccced6542249dcb91b68c5f268dc"
var dropInput = document.querySelector(".queens")
var dropInput1 = document.querySelector(".brooklyn")
var dropInput2 = document.querySelector(".bronx")
var dropInput3 = document.querySelector(".ny")
var dropInput4 = document.querySelector(".si")
var dropInput5 = document.querySelector(".li")
var searchBtn = document.querySelector(".search-btn")
var selectFormEl = document.querySelector("#select-form")


function userSelect(){
    var selectedCityEl = selectFormEl.value
  if (selectedCityEl === "5") {
    fetchQueens()
  } 
  if (selectedCityEl === "1") {
    fetchBrooklyn()
  }
  if (selectedCityEl === "2") {
    fetchBronx()
  }
  if (selectedCityEl === "3") {
    fetchNy()
  }
  if (selectedCityEl === "4") {
    fetchSi()
  }
}

function handleQueens() {
    var boro1 = dropInput
    fetchQueens(boro1);
}

function fetchQueens(boro1) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=queens&appid=${apiKey}`
    fetch(apiUrl).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)

    })
}

function handleBrooklyn() {
    var boro2 = dropInput1
    fetchBrooklyn(boro2);
}
function fetchBrooklyn(boro2) {
    var apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=brooklyn&appid=${apiKey}`
    fetch(apiUrl2).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)

    })
}
function handleBronx() {
    var boro3 = dropInput2
    fetchBrooklyn(boro3);
}
function fetchBronx(boro3) {
    var apiUrl3 = `https://api.openweathermap.org/data/2.5/forecast?q=bronx&appid=${apiKey}`
    fetch(apiUrl3).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)

    })
}

function handleNy() {
    var boro4 = dropInput3
    fetchNy(boro4);
}
function fetchNy(boro4) {
    var apiUrl4 = `https://api.openweathermap.org/data/2.5/forecast?q=manhattan&appid=${apiKey}`
    fetch(apiUrl4).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)

    })
}
function handleSi() {
    var boro5 = dropInput4
    fetchNy(boro5);
}
function fetchSi(boro5) {
    var apiUrl5 = `https://api.openweathermap.org/data/2.5/forecast?q=staten-island&appid=${apiKey}`
    fetch(apiUrl5).then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data)

    })
}
searchBtn.addEventListener('click', userSelect)

//`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`